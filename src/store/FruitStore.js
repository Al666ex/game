import { makeAutoObservable } from "mobx";
import { displayFruits, setStatusTrue, getFruitRandom } from "../utils";

import tomato from '../static/images/tomato.png' 
import watermelon from '../static/images/watermelon.png' 
import pomegranate from '../static/images/pomegranate.png'
import walnut from '../static/images/walnut.png';
import currant from '../static/images/currant.png'
import raspberries from '../static/images/raspberries.png';
import pepper from '../static/images/pepper.png'
import apricot from '../static/images/apricot.png';
import banana from '../static/images/banana.png';
import pistachio from '../static/images/pistachio.png';
import onion from '../static/images/onion.png'
import zucchini from '../static/images/zucchini.png'
import mandarin from '../static/images/mandarin.png'
import horseradish from '../static/images/horseradish.png'
import lemon from '../static/images/lemon.png'
import garlic from '../static/images/garlic.png'
import corn from '../static/images/corn.png'
import guarana from '../static/images/guarana.png'
import kiwi from '../static/images/kiwi.png'
import cabbage from '../static/images/cabbage.png'
import chickpea from '../static/images/chickpea.png'
import beetroot from '../static/images/beetroot.png'
import beans from '../static/images/beans.png'
import cauliflower from '../static/images/cauliflower.png'
import potato from '../static/images/potato.png'
import melon from '../static/images/melon.png'
import grapefruit from '../static/images/grapefruit.png'
import blackberry from '../static/images/blackberry.png'
import lettuce from '../static/images/lettuce.png'
import ginger from '../static/images/ginger.png'


//

import tomatoSound from '../static/mp3/tomato.mp3' 
import watermelonSound from '../static/mp3/watermelon.mp3' 
import pomegranateSound from '../static/mp3/pomegranate.mp3'
import walnutSound from '../static/mp3/walnut.mp3';
import currantSound from '../static/mp3/currant.mp3'
import raspberriesSound from '../static/mp3/raspberries.mp3';
import pepperSound from '../static/mp3/pepper.mp3'
import apricotSound from '../static/mp3/apricot.mp3';
import bananaSound from '../static/mp3/banana.mp3';
import pistachioSound from '../static/mp3/pistachio.mp3';
import onionSound from '../static/mp3/onion.mp3'
import zucchiniSound from '../static/mp3/zucchini.mp3'
import mandarinSound from '../static/mp3/mandarin.mp3'
import horseradishSound from '../static/mp3/horseradish.mp3'
import lemonSound from '../static/mp3/lemon.mp3'
import garlicSound from '../static/mp3/garlic.mp3'
import cornSound from '../static/mp3/corn.mp3'
import guaranaSound from '../static/mp3/guarana.mp3'
import kiwiSound from '../static/mp3/kiwi.mp3'
import cabbageSound from '../static/mp3/cabbage.mp3'
import chickpeaSound from '../static/mp3/chickpea.mp3'
import beetrootSound from '../static/mp3/beetroot.mp3'
import beansSound from '../static/mp3/beans.mp3'
import cauliflowerSound from '../static/mp3/cauliflower.mp3'
import potatoSound from '../static/mp3/potato.mp3'
import melonSound from '../static/mp3/melon.mp3'
import grapefruitSound from '../static/mp3/grapefruit.mp3'
import blackberrySound from '../static/mp3/blackberry.mp3'
import lettuceSound from '../static/mp3/lettuce.mp3'
import gingerSound from '../static/mp3/ginger.mp3'



// import pearSound from '../static/mp3/pear.mp3';

export default class FruitStore{
    constructor(){
        this._fruits = [
            {id : 1, fruit : 'tomato',  status:false, image : tomato, mp3 : tomatoSound, count : 0},
            {id : 2, fruit : 'watermelon', status:false, image : watermelon, mp3 : watermelonSound, count : 0},
            {id : 3, fruit : 'pomegranate',  status:false, image : pomegranate, mp3 : pomegranateSound, count : 0},
            {id : 4, fruit : 'walnut',status:false, image : walnut, mp3 : walnutSound, count : 0},
            {id : 5, fruit : 'currant',  status:false, image : currant, mp3 : currantSound, count : 0},
            {id : 6, fruit : 'raspberries',status:false, image : raspberries, mp3 : raspberriesSound, count : 0},
            {id : 7, fruit : 'pepper',status:false, image : pepper, mp3 : pepperSound, count : 0},
            {id : 8, fruit : 'apricot',  status:false, image : apricot, mp3 : apricotSound, count : 0},
            {id : 9, fruit : 'banana',status:false, image : banana, mp3 : bananaSound, count : 0},
            {id : 10, fruit : 'pistachio',  status:false, image : pistachio, mp3 : pistachioSound, count : 0},            
            {id : 11, fruit : 'onion',status:false, image : onion, mp3 : onionSound, count : 0}, 
            {id : 12, fruit : 'zucchini',status:false, image : zucchini, mp3 : zucchiniSound, count : 0}, 
            {id : 13, fruit : 'mandarin',status:false, image : mandarin, mp3 : mandarinSound, count : 0}, 
            // {id : 14, fruit : 'horseradish',status:false, image : horseradish, mp3 : horseradishSound, count : 0}, 
            // {id : 15, fruit : 'lemon',status:false, image : lemon, mp3 : lemonSound, count : 0}, 
            // {id : 16, fruit : 'garlic',status:false, image : garlic, mp3 : garlicSound, count : 0},
            // {id : 17, fruit : 'corn',status:false, image : corn, mp3 : cornSound, count : 0},
            // {id : 18, fruit : 'guarana',status:false, image : guarana, mp3 : guaranaSound, count : 0},
            // {id : 19, fruit : 'kiwi',status:false, image : kiwi, mp3 : kiwiSound, count : 0},
            // {id : 20, fruit : 'cabbage',status:false, image : cabbage, mp3 : cabbageSound, count : 0},
            // {id : 21, fruit : 'chickpea',status:false, image : chickpea, mp3 : chickpeaSound, count : 0},
            // {id : 22, fruit : 'beetroot',status:false, image : beetroot, mp3 : beetrootSound, count : 0},
            // {id : 23, fruit : 'beans',status:false, image : beans, mp3 : beansSound, count : 0},
            // {id : 24, fruit : 'cauliflower',status:false, image : cauliflower, mp3 : cauliflowerSound, count : 0},
            // {id : 25, fruit : 'potato',status:false, image : potato, mp3 : potatoSound, count : 0},
            // {id : 26, fruit : 'melon',status:false, image : melon, mp3 : melonSound, count : 0},
            // {id : 27, fruit : 'grapefruit',status:false, image : grapefruit, mp3 : grapefruitSound, count : 0},
            // {id : 28, fruit : 'blackberry',status:false, image : blackberry, mp3 : blackberrySound, count : 0},
            // {id : 29, fruit : 'lettuce',status:false, image : lettuce, mp3 : lettuceSound, count : 0},
            // {id : 30, fruit : 'ginger',status:false, image : ginger, mp3 : gingerSound, count : 0},
            
          ]
          
          this._fruitsStatusFalse = []        
          this._fruitsDisplay = []
          this._currentFruit = {}

          makeAutoObservable(this)
        }

        get currentFruit(){
            return this._currentFruit || null
        }

        setCurrentFruit(id = null){ 
            if(id === null){
                let arrId = getFruitRandom(this._fruitsDisplay)        
                this._currentFruit = arrId
            }       
            
            if(this._fruitsStatusFalse.length <= 6 && id === this._currentFruit.id){
                let arr = []                  
                arr = this._fruitsDisplay.filter(item => item.id !== id)                
                let arrId = getFruitRandom(arr)                  
                this._currentFruit = arrId

                this._fruits = setStatusTrue(this._fruits,id)
                this._fruitsStatusFalse = this._fruits.filter(fruit => fruit.status === false)
                this._fruitsDisplay = (displayFruits(this._fruitsStatusFalse))
                  
                return
            }             

            if(id === this._currentFruit.id) 
            {                
                let arr = []                                 
                for(let i =0 ; i < this._fruitsStatusFalse.length; i++){                                                
                    let tempIdFalse = this._fruitsStatusFalse[i].id                      
                        let result = this._fruitsDisplay.find(item => item.id === tempIdFalse)    
                        if(result === undefined){
                            arr.push(tempIdFalse)
                        }                        
                }
                
                let arrId = getFruitRandom(arr)          
                let newFruit = this._fruitsStatusFalse.find(item => item.id === arrId)            
                this._fruitsDisplay = this._fruitsDisplay.map(item => item.id === id ? newFruit : item)

                this._fruits = setStatusTrue(this._fruits,id)
                this._fruitsStatusFalse = this._fruits.filter(fruit => fruit.status === false)           
    
                arrId = getFruitRandom(this._fruitsDisplay)         
                newFruit = this._fruitsDisplay.find(item => item.fruit === arrId.fruit)                                 
                this._currentFruit = newFruit
    
            } else {
                console.log('false')
            }                
        }
        
        get fruitsDisplay(){
            return this._fruitsDisplay
        }

        setFruitsDisplay(arr){
            this._fruitsDisplay = arr
        }

        get fruits(){
            return this._fruits    
        }

        get fruitsStatusFalse(){
            return this._fruitsStatusFalse
        }

        setFruitsStatusFalse(arr){            
            this._fruitsStatusFalse = arr.filter(fruit => fruit.status === false)
        }


        //this.onChange = (id, background) => setFruits(fruits.map(item => item.id === id ? {...item, background} : item))
 
}


