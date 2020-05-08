<template>
  <div>
<!--- hero------------------>
    <section class="hero">
      <div class="hero-body"> 
        <div class="container">
          <h2 class="title is-1 has-text-centered "> Track your Jogs here </h2>     
          </div>
        </div>
    </section>  
    
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="@/images/jog.jpg" alt="Image">
          </figure>
          </div>

        <div class="media-content">
          <div class="content">
            <div class="columns">
              <div class="column is-half">
              <p>
              <center>
              <strong>Jogging on.</strong> 
              </center>
              </p>
            </div>

            <div class="column is-half">
              <input v-model="value" class="input is-rounded is-hovered is-success" placeholder="Enter duration"/>
                <div class="buttons is-centered">
                  <button class="button is-dark" @click="add(text)">Add</button>
                  <button class="button is-dark" @click="get(Jog.State.userId)">Log</button>
                  <button class="button is-dark" @click="deleteJog(text)">Delete</button>
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

import Jog from '../models/Jog'

export default {
    created(){
      Jog.Init();
    },
    data() {
      return  {
        value: Jog.State.jog,
        text: Jog.State.jog
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
      async deleteJog() {
        try{
          await deleteJog(this.userId);
          this.$router.push('/jog')
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
			