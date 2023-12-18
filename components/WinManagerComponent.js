export class WinManagerComponent{
    winAccumulated = true

    constructor(){}

    accumulatedWin(reelsAssets){
        if (!this.winAccumulated){
            const stars = []
            const totalStarPerRow = []
            for (let r=0; r< reelsAssets.length; r++){
                let reelsAssetsCopy = [...reelsAssets[r]]
                reelsAssetsCopy.pop()
                reelsAssetsCopy = reelsAssetsCopy.slice(reelsAssetsCopy.length - 5)
                const starAssets = reelsAssetsCopy.filter(name => name == "star")
                totalStarPerRow[r] = [...starAssets]
                const foundStar = totalStarPerRow[r][0] ? true : false
                stars.push(foundStar)
            }

            const winsFound = stars.every(el => el)
            let totalLines = 1
            if(winsFound){
                totalStarPerRow.reverse()
                for(let i=0; i< totalStarPerRow.length; i++){
                    const currentRow = totalStarPerRow[i]
                    totalLines = totalLines*currentRow.length
                }
            }
            
            let betEl = document.querySelector(".betAmount")
            const bet = Number(betEl.textContent.replace("$", ""))
            let credits = document.querySelector(".credits")
            let creditsAmount = Number(credits.textContent.replace("$", ""))
            const finalAmount = winsFound ? creditsAmount+totalLines*bet : creditsAmount-totalLines*bet
            credits.textContent = `${finalAmount}$`
            this.winAccumulated = true
        }
    }
}