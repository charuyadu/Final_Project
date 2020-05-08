
import myFetch from "./myFetch";

export default{     
    State: {
    },
    Init(){
        myFetch('/run')
        .then(x=> { 
            this.State = x;
            console.log(x);
        })
        .catch(err=> console.warn(err));
    },
    
    async add(value){
        await myFetch('/run/add',{value})
    },
    async get(){
        await myFetch('/run/get',{})
    },
    async deleteRun(){
        await myFetch('/run/delete',{})
    }
}



