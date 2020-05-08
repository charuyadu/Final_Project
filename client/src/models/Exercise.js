
import myFetch from "./myFetch";

export default{     
    State: {
    },
    Init(){
        myFetch('/exercise')
        .then(x=> { 
            this.State = x;
            console.log(x);
        })
        .catch(err=> console.warn(err));
    },
    
    async add(value){
        await myFetch('/exercise/add',{value})
    },
    async get(){
        await myFetch('/exercise/get',{})
    },
    async deleteExercise(){
        await myFetch('/exercise/delete',{})
    }
}



