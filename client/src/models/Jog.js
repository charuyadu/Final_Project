
import myFetch from "./myFetch";

export default{     
    State: {
    },
    Init(){
        myFetch('/jog')
        .then(x=> { 
            this.State = x;
            console.log(x);
        })
        .catch(err=> console.warn(err));
    },
    
    async add(value){
        await myFetch('/jog/add',{value})
    },
    async get(){
        await myFetch('/jog/get',{})
    },
    async deleteJog(){
        await myFetch('/jog/delete',{})
    }
}



