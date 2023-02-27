import { makeAutoObservable } from "mobx";
import { fruitRandom } from "../utils";

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

// import pearSound from '../static/mp3/pear.mp3';

export default class FruitStore{
    constructor(){
        this._fruits = [
            {id : 1, fruit : 'tomato',  status:false, image : tomato, mp3 : tomatoSound},
            {id : 2, fruit : 'watermelon', status:false, image : watermelon, mp3 : watermelonSound},
            {id : 3, fruit : 'pomegranate',  status:false, image : pomegranate, mp3 : pomegranateSound},
            {id : 4, fruit : 'walnut',status:false, image : walnut, mp3 : walnutSound},
            // {id : 5, fruit : 'currant',  status:true, image : currant, mp3 : currantSound},
            // {id : 6, fruit : 'raspberries',status:false, image : raspberries, mp3 : raspberriesSound},
            // {id : 7, fruit : 'pepper',status:false, image : pepper, mp3 : pepperSound},
            // {id : 8, fruit : 'apricot',  status:false, image : apricot, mp3 : apricotSound},
            // {id : 9, fruit : 'banana',status:false, image : banana, mp3 : bananaSound},
            // {id : 10, fruit : 'pistachio',  status:false, image : pistachio, mp3 : pistachioSound},            
            // {id : 11, fruit : 'onion',status:false, image : onion, mp3 : onionSound}, 
            // {id : 12, fruit : 'zucchini',status:false, image : zucchini, mp3 : zucchiniSound}, 
            // {id : 13, fruit : 'mandarin',status:false, image : mandarin, mp3 : mandarinSound}, 
            // {id : 14, fruit : 'horseradish',status:false, image : horseradish, mp3 : horseradishSound}, 
            // {id : 15, fruit : 'lemon',status:false, image : lemon, mp3 : lemonSound}, 
            // {id : 16, fruit : 'garlic',status:false, image : garlic, mp3 : garlicSound},
            // {id : 17, fruit : 'corn',status:false, image : corn, mp3 : cornSound},
            // {id : 18, fruit : 'guarana',status:false, image : guarana, mp3 : guaranaSound},
            // {id : 19, fruit : 'kiwi',status:false, image : kiwi, mp3 : kiwiSound},
            // {id : 20, fruit : 'cabbage',status:false, image : cabbage, mp3 : cabbageSound},
            // {id : 21, fruit : 'chickpea',status:false, image : chickpea, mp3 : chickpeaSound},
            // {id : 22, fruit : 'beetroot',status:false, image : beetroot, mp3 : beetrootSound},
            // {id : 23, fruit : 'beans',status:false, image : beans, mp3 : beansSound},
            // {id : 24, fruit : 'cauliflower',status:false, image : cauliflower, mp3 : cauliflowerSound}
            
          ]
          
          this._fruitsStatusFalse = []        
          this._fruitsDisplay = []
          this._currentFruit = {}

          makeAutoObservable(this)
        }

        get currentFruit(){
            return this._currentFruit
        }

        setCurrentFruit(id = null){ 
            if(id === null){
                let index = fruitRandom(this._fruitsDisplay.length)
                let arrId = this._fruitsDisplay[index]                    
                this._currentFruit = arrId
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
                
                let index = fruitRandom(arr.length)
                let arrId = arr[index]            
                let newFruit = this._fruitsStatusFalse.find(item => item.id === arrId)            
                this._fruitsDisplay = this._fruitsDisplay.map(item => item.id === id ? newFruit : item)
    
                index = fruitRandom(this._fruitsDisplay.length)
                arrId = this._fruitsDisplay[index]            
                newFruit = this._fruitsDisplay.find(item => item.fruit === arrId.fruit)
                console.log(newFruit.fruit)                    
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


