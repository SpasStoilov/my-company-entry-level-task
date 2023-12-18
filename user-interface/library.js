import * as Event from "./events.js"

/** ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^+
 *  LIBRARY.js:
 *     Html elemnts and styles.
 *  ------------------------------------------------------+
 */

export const infoButton = {
    typeName: "button",
    className:"info-btn",
    textContent: "i",
    style: {
        display: "block",
        "align-self": "flex-center",
        padding: '15px 25px 15px 25px',
        "margin-top": "auto",
        // border:"10px solid red",
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        zIndex: "100000000000",
        position: "absolute",
        top: "90.2%",
        left: "56%",
        borderRadius:"50%",
        fontSize: "20px"
    },
    Events: [
        {evnt: "click", evntFunc: Event.OnClick},
    ],
}
export const playButton = {
    typeName: "button",
    className:"play-reels-btn",
    textContent: "Play",
    style: {
        display: "block",
        "align-self": "flex-center",
        padding: '15px 10px 15px 10px',
        "margin-top": "auto",
        border:"10px solid red",
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        backgroundColor: '#F7B538',
        zIndex: "100000000000",
        position: "absolute",
        top: "90%",
        left: "50%",
        borderRadius:"50%",
        fontSize: "20px"
    },
    Events: [
        {evnt: "click", evntFunc: Event.OnClick},
    ],
}
export const betPlus = {
    typeName: "button",
    className:"betPlus-btn",
    textContent: "+",
    style: {
        display: "block",
        "align-self": "flex-center",
        padding: '15px 10px 15px 10px',
        "margin-top": "auto",
        border:"5px solid blue",
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        backgroundColor: '#F7B538',
        zIndex: "100000000000",
        position: "absolute",
        top: "90%",
        left: "42%",
        borderRadius:"10%",
        fontSize: "20px"
    },
    Events: [
        {evnt: "click", evntFunc: Event.OnClick},
    ],
}
export const betMinus = {
    typeName: "button",
    className:"betMinus-btn",
    textContent: "-",
    style: {
        display: "block",
        "align-self": "flex-center",
        padding: '15px 10px 15px 10px',
        "margin-top": "auto",
        border:"5px solid blue",
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        backgroundColor: '#F7B538',
        zIndex: "100000000000",
        position: "absolute",
        top: "90%",
        left: "40%",
        borderRadius:"10%",
        fontSize: "20px",
    },
    Events: [
        {evnt: "click", evntFunc: Event.OnClick},
    ],
}
export const betAmount = {
    typeName: "p",
    className: "betAmount",
    textContent: "1$",
    style: {
        display: "block",
        "align-self": "flex-center", 
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        padding: '15px 10px 15px 10px',
        backgroundColor: '#F7B538',
        zIndex: "100000000000",
        position: "absolute",
        top: "87.1%",
        left: "45%",
        fontSize: "30px",
        width:"44px",
        overflow:"hidden"
    }
}
export const credits = {
    typeName: "p",
    className: "credits",
    textContent: "100000$",
    style: {
        display: "block",
        "align-self": "flex-center", 
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        padding: '15px 10px 15px 10px',
        backgroundColor: '#F7B538',
        zIndex: "100000000000",
        position: "absolute",
        top: "5%",
        left: "43.6%",
        fontSize: "80px",
    }
}
export const closeInfoButton = {
    typeName: "button",
    className:"closeInfo-btn",
    textContent: "X",
    style: {
        display: "block",
        "align-self": "flex-center",
        fontFamily: "Arial, Helvetica, sans-serif",
        textDecoration: "none",
        zIndex: "100000000000",
        position: "absolute",
        fontSize: "20px",
        left:"95.3%",
        top:"-1.5%"
    },
    Events: [
        {evnt: "click", evntFunc: Event.OnClick},
    ],
}
export const info = {
    typeName: "div",
    className:"info-holder",
    textContent: [
        closeInfoButton,
        {
            typeName: "p",
            className: "text-info",
            textContent: `Win lines are from three stars along horizontal.`,
            style: {
                display: "block",
                padding:"30px",
                fontFamily: "Arial, Helvetica, sans-serif",
                textDecoration: "none",
                zIndex: "100000000000",
                position: "absolute",
                fontSize: "30px",
                top: "5%",
            }
        },
        {
            typeName: "p",
            className: "text-info",
            textContent: `Amount of win per spin is the number of won lines per spin, multiplied by the bet.`,
            style: {
                display: "block",
                padding:"30px",
                fontFamily: "Arial, Helvetica, sans-serif",
                textDecoration: "none",
                zIndex: "100000000000",
                position: "absolute",
                fontSize: "30px",
                top: "20%",
            }
        },
        {
            typeName: "p",
            className: "text-info",
            textContent: `Spin the reels with play button.`,
            style: {
                display: "block", 
                fontFamily: "Arial, Helvetica, sans-serif",
                textDecoration: "none",
                padding:"30px",
                zIndex: "100000000000",
                position: "absolute",
                fontSize: "30px",
                top: "45%",
            }
        },
        {
            typeName: "p",
            className: "text-info",
            textContent: `Use + / - buttons to increase or decrease your bet.`,
            style: {
                display: "block", 
                fontFamily: "Arial, Helvetica, sans-serif",
                textDecoration: "none",
                padding:"30px",
                zIndex: "100000000000",
                position: "absolute",
                fontSize: "30px",
                top: "60%",
            }
        }

    ],
    style: {
        display: "none",
        flexDirection: 'column',
        fontFamily: "Arial, Helvetica, sans-serif",
        width:"400px",
        height:"750px",
        backgroundColor:"white",
        textDecoration: "none",
        zIndex: "100000000000",
        position: "absolute",
        border:"10px solid green",
        borderRadius:"7px",
        top: "10%",
        left: "41%",
    },
}