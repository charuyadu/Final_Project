<template>
  <div>
<!--- hero------------------>
    <section class="hero">
      <div class="hero-body"> 
        <div class="container">
          <h2 class="title is-1 has-text-centered "> Track your water consumption here </h2>     
          </div>
        </div>
    </section>  
    
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="@/images/water.jpg" alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <div class="columns">
              <div class="column is-half">
                <p>
                <center>
                <strong>Water solves all problems. <br> <br> Want to lose weight?  Drink water.
                <br> <br> Want a Clear Face?  Drink water. <br> </strong> 
                </center>
                </p>
              </div>

            <div class="column is-half">
              <input v-model="ounces" class="input is-rounded is-hovered is-success" placeholder="Enter ounces"/>
                <div class="buttons is-centered">
                  <button class="button is-dark" @click="add(text)">Add</button>
                  <button class="button is-dark" @click="get(Water.State.userId)">Log</button>
                  <button class="button is-dark" @click="deleteWater(text)">Delete</button>
                </div>

                <progress class="progress is-success" value="15" max="100">15%</progress>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    
  </div>
</template>

<script>

import Water from '../models/Water'

export default {
    created(){
      Water.Init();
    },
    data() {
      return  {
        ounces: Water.State.water,
        text: Water.State.water
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
      async deleteWater() {
        try{
          await deleteWater(this.userId);
          this.$router.push('/water')
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
			