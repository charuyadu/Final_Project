<template>
  <div>
<!--- hero------------------>
    <section class="hero">
      <div class="hero-body"> 
        <div class="container">
          <h2 class="title is-1 has-text-centered "> Track your Food here </h2>     
          </div>
        </div>
    </section>  
    
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="@/images/healthy-eating.jpg" alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <div class="columns">
              <div class="column is-half">
                <p>
                <center>
                <strong>A Healthy Diet is a good diet. Keep Track of the food you eat here and the calories spent.</strong> 
                </center>
                </p>
              </div>

              <div class="column is-half">
                <input v-model="value" class="input is-rounded is-hovered is-success" placeholder="Enter food"/>
                  <div class="buttons is-centered">
                    <button class="button is-dark" @click="add(text)">Add</button>
                    <button class="button is-dark" @click="get(Food.State.userId)">Log</button>
                    <button class="button is-dark" @click="deleteFood(text)">Delete</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

  </div>
</template>

<script>

import Food from '../models/Food'

export default {
    created(){
      Food.Init();
    },
    data() {
      return  {
        value: Food.State.food,
        text: Food.State.food
      };
    },
    methods: {
      async add(value) {
        try{
          await add(this.value);
          
        }catch (error) {
          this.error = error;
        }
      },
      async get() {
          await get(this.userId);
          
        
      },
      async deleteFood() {
        try{
          await deleteFood(this.userId);
          this.$router.push('/food')
        }catch (error) {
          this.error = error;
        }
      }
    } 
}
</script>>

<style >
  .hero { background-color:  #08b6ad; }
  .buttons { padding: 10px 24px; }
</style>
			