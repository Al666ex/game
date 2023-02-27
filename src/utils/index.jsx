
export const fruitRandom = (n) => Math.floor(Math.random() * (n)) 

export const displayFruits = (arr) => {
    if(arr.length <= 0)return null
    if(arr.length <= 6)return arr
    let count = 0
    let displayArr = []         

    while(count < 6){
        count++
        displayArr =selectFruits(arr, displayArr)
    }
    return displayArr
}

function selectFruits(arr, displayArr){
    let goodfruit = false    
    let index = null
    do{
        index = fruitRandom(arr.length)
        let fruit = arr[index]
        let searchFruit = displayArr.find(item => item.id === fruit.id)
        if(searchFruit === undefined){
            goodfruit = true
            displayArr[displayArr.length] = fruit        
        }
    }
    while(!goodfruit)
    
    return displayArr

}

