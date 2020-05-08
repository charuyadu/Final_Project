
import myFetch from "./myFetch";

export default{     
    State: {
    },
    Init(){
        myFetch('/water')
        .then(x=> { 
            this.State = x;
            console.log(x);
        })
        .catch(err=> console.warn(err));
    },
    
    async add(ounces){
        await myFetch('/water/add',{ounces})
    },
    async get(){
        await myFetch('/water/get',{})
    },
    async deleteWater(){
        await myFetch('/water/delete',{})
    }
}



