<template>
  <div>
<!--- hero------------------>
    <section class="hero">
      <div class="hero-body"> 
        <div class="container">
          <h2 class="title is-1 has-text-centered "> Exercise Tracker </h2>     
        </div>
      </div>
    </section>  

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="@/images/exercise-icon.jpg" alt="Image">
          </figure>
        </div>
    
        <div class="media-content">
          <div class="content">
            <div class="columns">
              <div class="column is-half">
                <p>
                <center>
                <strong>Exercise your worries away.</strong> 
                </center>
                </p>
              </div>

            <div class="column is-half">
              <input v-model="value" class="input is-rounded is-hovered is-success" placeholder="Enter exercise"/>
                <div class="buttons is-centered">
                  <button class="button is-dark" @click="add(text)">Add</button>
                  <button class="button is-dark" @click="get(Exercise.State.userId)">Log</button>
                  <button class="button is-dark" @click="deleteExercise(text)">Delete</button>
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

import Exercise from '../models/Exercise'

export default {
    created(){
      Exercise.Init();
    },
    data() {
      return  {
        value: Exercise.State.exercise,
        text: Exercise.State.exercise
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
      async deleteExercise() {
        try{
          await deleteExercise(this.userId);
          this.$router.push('/exercise')
        }catch (error) {
          this.error = error;
        }
      }
    } 
}
</script>>

<style >
  .hero { background-color:  #83bbb8; }
  .buttons { padding: 10px 24px; }
</style>
			