import {constructorObject}from "../main/Utils.js"

export class BackgroundComponent{
    view;

    constructor(){
        this.view = constructorObject.Container();
        this.view.name = "background-view"
    }

    init(parent){
        const background = constructorObject.Sprite("background")
        background.name = "background-asset"
        background.width = window.innerWidth 
        background.height = window.innerHeight
        this.view.addChild(background)
        parent.addChild(this.view)
    }
}