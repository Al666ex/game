import { makeAutoObservable } from "mobx";
import { displayFruits, setStatusTrue, getFruitRandom } from "../utils";

import tomato from '../static/images/tomato.png';
import watermelon from '../static/images/watermelon.png'; 
import pomegranate from '../static/images/pomegranate.png';
import walnut from '../static/images/walnut.png';
import currant from '../static/images/currant.png';
import raspberries from '../static/images/raspberries.png';
import pepper from '../static/images/pepper.png';
import apricot from '../static/images/apricot.png';
import banana from '../static/images/banana.png';
import pistachio from '../static/images/pistachio.png';
import onion from '../static/images/onion.png';
import zucchini from '../static/images/zucchini.png';

import mandarin from '../static/images/mandarin.png';

//

import tomatoSound from '../static/mp3/tomato.mp3'; 
import watermelonSound from '../static/mp3/watermelon.mp3'; 
import pomegranateSound from '../static/mp3/pomegranate.mp3';
import walnutSound from '../static/mp3/walnut.mp3';
import currantSound from '../static/mp3/currant.mp3'
import raspberriesSound from '../static/mp3/raspberries.mp3';
import pepperSound from '../static/mp3/pepper.mp3'
import apricotSound from '../static/mp3/apricot.mp3';
import bananaSound from '../static/mp3/banana.mp3';
import pistachioSound from '../static/mp3/pistachio.mp3';
import onionSound from '../static/mp3/onion.mp3';
import zucchiniSound from '../static/mp3/zucchini.mp3';

import mandarinSound from '../static/mp3/mandarin.mp3'



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


            
          ]

          
          this._fruitsStatusFalse = []        
          this._fruitsDisplay = []
          this._currentFruit = {}

          makeAutoObservable(this)
        }

        get currentFruit(){
            return this._currentFruit; 
        }

        setCurrentFruit(id = null){ 
            if(id === null){                
                this._currentFruit = getFruitRandom(this._fruitsDisplay);
            }       
            
            if(this._fruitsStatusFalse.length <= 6 && id === this._currentFruit.id){
                let fruits = [];               
                fruits = this._fruitsDisplay.filter(item => item.id !== id);                                
                this._currentFruit = getFruitRandom(fruits);

                this._fruits = setStatusTrue(this._fruits,id);
                this._fruitsStatusFalse = this._fruits.filter(fruit => fruit.status === false);
                this._fruitsDisplay = (displayFruits(this._fruitsStatusFalse));
                  
                return
            }             

            if(id === this._currentFruit.id) 
            {                
                let fruits = [];                              
                for(let i =0 ; i < this._fruitsStatusFalse.length; i++){                                                
                    let fruitId = this._fruitsStatusFalse[i].id;                      
                        let found = this._fruitsDisplay.find(item => item.id === fruitId);    
                        if(found === undefined){
                            fruits.push(this._fruitsStatusFalse[i]);
                        }                        
                }
                
                let fruit = getFruitRandom(fruits);     
                
                let newFruit = this._fruitsStatusFalse.find(item => item.id === fruit.id);            
                this._fruitsDisplay = this._fruitsDisplay.map(item => item.id === id ? newFruit : item);

                this._fruits = setStatusTrue(this._fruits,id);
                this._fruitsStatusFalse = this._fruits.filter(fruit => fruit.status === false);           
    
                fruit = getFruitRandom(this._fruitsDisplay);  
                newFruit = this._fruitsDisplay.find(item => item.fruit === fruit.fruit);                                 
                this._currentFruit = newFruit;    
            } 
        }
        
        get fruitsDisplay(){
            return this._fruitsDisplay;
        }

        setFruitsDisplay(fruits){
            this._fruitsDisplay = fruits;
        }

        get fruits(){
            return this._fruits;    
        }

        rebootGame(){
            this._fruits = this._fruits.map(item => {
                return {...item, status : false, count : 0}                
            });

            this.setFruitsStatusFalse(this._fruits);            
            let display = displayFruits(this.fruitsStatusFalse);
            this.setFruitsDisplay(display);
            this.setCurrentFruit(null);         
        }        

        get fruitsStatusFalse(){
            return this._fruitsStatusFalse;
        }

        setFruitsStatusFalse(fruits){            
            this._fruitsStatusFalse = fruits.filter(fruit => fruit.status === false);
        }        
 
}


