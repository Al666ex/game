
export const random = (n) => Math.floor(Math.random() * (n));

export const getFruitRandom = (fruits) => {
    let index = random(fruits.length);
    let fruit = fruits[index];   
    return fruit;
}

export const setStatusTrue = (fruits, id) => 
    fruits.map(fru => {
        if(fru.id !== id) return fru;
        const count = fru.count + 1;
        return {...fru, count, status : count >= 2}               
    })    


export const displayFruits = (fruitsStatusFalse) => {
    if(fruitsStatusFalse.length <= 0)return null;
    if(fruitsStatusFalse.length <= 6)return fruitsStatusFalse;
    let count = 0;
    let displayFruits = [];    

    while(count < 6){
        count++;
        displayFruits =selectFruits(fruitsStatusFalse, displayFruits);
    }
    return displayFruits
}

function selectFruits(fruitsStatusFalse, displayFruits){
    let goodfruit = false;    
    let index = null;
    do{
        index = random(fruitsStatusFalse.length);
        let fruit = fruitsStatusFalse[index];
        let searchFruit = displayFruits.find(item => item.id === fruit.id);
        if(searchFruit === undefined){
            goodfruit = true;
            displayFruits[displayFruits.length] = fruit;        
        }
    }
    while(!goodfruit)    
    return displayFruits
}


