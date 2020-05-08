
import myFetch from "./myFetch";

export default{     
    State: {
    },
    Init(){
        myFetch('/food')
        .then(x=> { 
            this.State = x;
            console.log(x);
        })
        .catch(err=> console.warn(err));
    },
    
    async add(value){
        await myFetch('/food/add',{value})
    },
    async get(){
        await myFetch('/food/get',{})
    },
    async deleteFood(){
        await myFetch('/food/delete',{})
    }
}



