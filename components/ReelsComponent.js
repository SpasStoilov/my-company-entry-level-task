import {constructorObject}from "../main/Utils.js"
import { SPRITES } from "../root.js";

export class ReelsComponent{
    parent = null;
    view;
    timeouts = []
    /**
     * Reels Frame
    */
   reelsFramePosition = {
       x: window.innerWidth*(0.43),
       y: window.innerHeight*(0.30)
    }
    reelsFrameWidth = 330
    reelsFrameHeight = 534
    assetsStopPositions = {}
    /**
     * Reels Assets
    */
   reelsAssets = []
   assetWidth = 100
   assetHeight = 100
   assetXOffset = 15
   assetYOffset = 16
   /**
    * Reels
   */
    stopReels = true;
    reelsHasStoped = true
    reelStop = [true, true, true]
    numberOfReels = 3
    numberOfassetsPerReel = 7
    visibleAssetsPerReel = 5
    reelsInitTextures = [
        [ "trapezoid", "hexagon",   "square",    "star",    "circle", "trapezoid", "trapezoid" ],
        [ "circle",    "trapezoid", "hexagon",   "square",  "star"  , "circle"   , "trapezoid" ],
        [ "star",      "circle",    "trapezoid", "hexagon", "square", "star"     , "trapezoid" ]
    ]
    /**
     * Reels spining
     */
    changeRegulator = 5
    changeInAssetYPosition = this.assetHeight / this.changeRegulator
    coordinateYSpinigRange = {
        start: this.reelsFramePosition.y + this.assetYOffset - this.assetHeight,
        end: this.reelsFramePosition.y + this.assetYOffset + this.assetHeight*(this.visibleAssetsPerReel+1),
    }
    orderOfSpining = Array.from({ length: this.numberOfReels }, (_, i) => i)
    timeInterval = 200
    spinTime = 200
    amoutTimeFromStartOfTheSpining = 0
    
    constructor(){
        this.view = constructorObject.Container();
        this.view.name = "reels-view"
    }
    init(parent){
        this.parent = parent
        this.parent.addChild(this.view)
        this.createReelsFrame()
        this.createReels()
        this.setMaks()
    }
    createReelsFrame(){
        const reelsFrame = constructorObject.Sprite("reels-frame")
        reelsFrame.name = "reels-frame"
        reelsFrame.width = this.reelsFrameWidth
        reelsFrame.height = this.reelsFrameHeight
        reelsFrame.position.set(this.reelsFramePosition.x, this.reelsFramePosition.y)
        this.parent.addChild(reelsFrame)
    }
    setMaks(){
        const mask = constructorObject.Graphics()
        mask.name = "reels-frame-mask"
        mask.beginFill(0xffffff);
        mask.drawRect(
            this.reelsFramePosition.x, 
            this.reelsFramePosition.y, 
            this.reelsFrameWidth,
            this.reelsFrameHeight
        );
        mask.endFill();
        this.view.mask = mask
        this.parent.addChild(mask)
    }
    createReels(){
        for(let i of Array.from({ length: this.numberOfReels }, (_, i) => i)){
            this.createReel(i)
        }
    }
    createReel(reelIndex){
        for (let slotIndex of Array.from({ length: this.numberOfassetsPerReel }, (_, i) => i)){
            const asset = constructorObject.Sprite(this.reelsInitTextures[reelIndex][slotIndex])
            asset.name = this.reelsInitTextures[reelIndex][slotIndex]
            asset.width = this.assetWidth
            asset.height = this.assetHeight
            const x = this.reelsFramePosition.x + this.assetXOffset + this.assetWidth*reelIndex
            const y = this.reelsFramePosition.y + this.assetYOffset + this.assetHeight*(slotIndex-1)
            asset.position.set(x, y)
            if (!this.reelsAssets[reelIndex]){
                this.reelsAssets[reelIndex] = []
            }
            if (!this.assetsStopPositions[reelIndex]){
                this.assetsStopPositions[reelIndex] = []
            }
            this.reelsAssets[reelIndex].push(asset)
            this.assetsStopPositions[reelIndex].push(y)
            this.view.addChild(asset)
        }
    }
    changeRandomTexture(asset){
        const options = Object.keys(SPRITES).filter(name=>name!="background" && name!="reels-frame")
        const randomIndex = Math.round(Math.random()*(options.length-1))
        this.setTexture(asset, options[randomIndex])
    }
    setTexture(asset, textureName){
        const newTexture = constructorObject.Texture(textureName)
        asset.name = textureName
        asset.texture = newTexture
    }
    spinReels(time){
        for(let reelIndex of this.orderOfSpining){
            time += this.timeInterval
            const assetsOfReel = this.reelsAssets[reelIndex]
            const timeoutID = setTimeout(() => {
                this.spin(reelIndex, assetsOfReel)
            }, time);

            this.timeouts.push(timeoutID);
        }
    }
    spin(reelIndex, assetsOfReel){
        for (let asset of assetsOfReel){
            const stopPositions = this.assetsStopPositions[reelIndex]
            if (this.stopReels && stopPositions.includes(asset.y)){
                this.reelStop[reelIndex] = true
                this.reelsHasStoped = this.reelStop.every(el => el)
                break
            }
            else if (!this.reelsHasStoped){
                const dy = this.changeInAssetYPosition
                if (asset.y + dy >= this.coordinateYSpinigRange.end){
                    asset.y = this.coordinateYSpinigRange.start
                    this.changeRandomTexture(asset)
                    if(!this.spinHystory[reelIndex]){
                        this.spinHystory[reelIndex] = []
                    }
                    this.spinHystory[reelIndex].push(asset.name)
                    continue
                }
                asset.y += dy
            }
        }
    }
    amoutTimePass(unitOfTime){
        if (!this.stopReels){
            this.amoutTimeFromStartOfTheSpining += unitOfTime
            this.amoutTimeFromStartOfTheSpining >= this.spinTime && this.stop()
        }
    }
    stop(){
        this.reelStop = [false, false, false]
        this.stopReels = true
        this.amoutTimeFromStartOfTheSpining = 0
    }
    setSpin(){
        for (let id of this.timeouts){
            clearTimeout(id)
        }
        this.timeouts = []
        this.reelsHasStoped = false
        this.stopReels = false
        this.changeRegulator = 5
        this.changeInAssetYPosition = this.assetHeight / this.changeRegulator
        this.spinHystory = []
    }
}