import axios from "axios";
import { useState } from "react";

export default class Service{
    static async getAll(){
        // const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
        //     params : {
        //         _limit : 10
        //     }
        // })
        // return response
    }

    static async playSound(url){
        const response = await axios.get(url,{
            
        })
        return response

    }
}