import * as act from "./interior.js"
import * as lb from "./library.js"
/** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^+
 *  RENDERER.js:
 *     Renders Html elemnts and styles.
 *  ------------------------------------------------------+
 */
act.insertTo(
    "body", 
    [
        lb.playButton, 
        lb.betMinus, 
        lb.betPlus,
        lb.betAmount,
        lb.credits,
        lb.infoButton,
        lb.info
    ]
)