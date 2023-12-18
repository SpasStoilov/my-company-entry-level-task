import * as PIXI from '../node_modules/pixi.js/dist/pixi.mjs';
import { SPRITES } from '../root.js';
/**
 * PIXI factory object
 */
export const constructorObject = {
    Sprite(name){
        return PIXI.Sprite.from(SPRITES[name]);
    },
    Container(){
        return new PIXI.Container();
    },
    Texture(path){
        return PIXI.Texture.from(path);
    },
    Graphics(){
        return new PIXI.Graphics();
    },
}