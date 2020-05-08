
import myFetch from "./myFetch";

export default{     
    State: {
    },
    Init(){
        myFetch('/health')
        .then(x=> { 
            this.State = x;
            console.log(x);
        })
        .catch(err=> console.warn(err));
    },
    
    async add(value){
        await myFetch('/health/add',{value})
    },
    async get(){
        await myFetch('/health/get',{})
    },
    async deleteHealth(){
        await myFetch('/health/delete',{})
    }
}



