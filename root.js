import * as PIXI from './node_modules/pixi.js/dist/pixi.mjs';
import { Components } from "./main/GlobalEmitterRegister.js"
import { MANIFEST } from './manifest.js';
import { emitterFactory } from './main/GlobalEmitterRegister.js';
//----------------------  IMPORTS -------------------------------------^


/** ------------------ WORLD PARAMS ----------------------------------
 *
 *  Bundles
 */
export let SPRITES = null

/**
 *  Application starter
 */
export async function START_APP(){
    /** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     *              Create Application
     * -----------------------------------------------
     */
    const app = new PIXI.Application(
        {
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xAAAAAA,
        }
    )
    app.view.id = "game-world";
    /** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     *          Load MANIFEST with all bundles
     * -----------------------------------------------
     */
    const manifest = MANIFEST
    await PIXI.Assets.init({manifest})
    SPRITES = await PIXI.Assets.loadBundle('SPRITES')
    /**
     * Init all components
     */
    await emitterFactory()
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     *               Start world ticker
     * -----------------------------------------------
     */
    let StartTime = 0
    function Ticker(){
        if (!Components.ReelsComponent.reelsHasStoped){
            Components.ReelsComponent.spinReels(StartTime)
            Components.ReelsComponent.amoutTimePass(1)
        }
        else{
            Components.WinManagerComponent.accumulatedWin(Components.ReelsComponent.spinHystory)
            let btn = document.querySelector(".play-reels-btn")
            btn.disabled = false
            btn.style.opacity = "1";
        }
    }
    app.ticker.add(Ticker)
    /** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     *        Dock Application to index.html
     * -----------------------------------------------
     */
    app.renderer.resize(window.innerWidth, window.innerHeight);
    document.body.appendChild(app.view)
    /** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     *            Add Components to Stage
     * -----------------------------------------------
     */
    Components.BackgroundComponent.init(app.stage)
    Components.ReelsComponent.init(app.stage)
}

await START_APP()