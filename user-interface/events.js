import { Components } from "../main/GlobalEmitterRegister.js"

/** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *             Handle user interactions with the buttons
 * -----------------------------------------------------------------
 * 
 */
export async function OnClick(e){
    /**
     * Handle buttons:
     */
    if (e.target.className == "play-reels-btn"){
        Components.ReelsComponent.setSpin()
        Components.WinManagerComponent.winAccumulated = false
        let btn = document.querySelector(".play-reels-btn")
        btn.disabled = true
        btn.style.opacity = "0.4";
    }
    if (e.target.className == "betMinus-btn"){
        let amount = document.querySelector(".betAmount")
        if(Number(amount.textContent.replace("$", ""))-1 > 0){
            amount.textContent = amount.textContent.replace("$", "")
            amount.textContent = `${Number(amount.textContent) - 1}$`
        }
    }
    if (e.target.className == "betPlus-btn"){
        let amount = document.querySelector(".betAmount")
        amount.textContent = amount.textContent.replace("$", "")
        amount.textContent = `${Number(amount.textContent) + 1}$`
    }
    if (e.target.className == "info-btn"){
        let info = document.querySelector(".info-holder")
        info.style.display = "flex"
    }
    if (e.target.className == "closeInfo-btn"){
        let info = document.querySelector(".info-holder")
        info.style.display = "none"
    }
}