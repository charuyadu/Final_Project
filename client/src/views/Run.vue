<template>
  <div>
<!--- hero------------------>
    <section class="hero">
      <div class="hero-body"> 
        <div class="container">
          <h2 class="title is-1 has-text-centered "> Track your runs here </h2>     
          </div>
        </div>
    </section>  
    
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="@/images/run.jpg" alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <div class="columns">
              <div class="column is-half">
                <p>
                <center>
                <strong>You don't run to add days to your life. You run to add life to your days.</strong> 
                </center>
                </p>
              </div>

            <div class="column is-half">
              <input v-model="value" class="input is-rounded is-hovered is-success" placeholder="Enter duration"/>
                <div class="buttons is-centered">
                  <button class="button is-dark" @click="add(text)">Add</button>
                  <button class="button is-dark" @click="get(Run.State.userId)">Log</button>
                  <button class="button is-dark" @click="deleteRun(text)">Delete</button>
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

import Run from '../models/Run'

export default {
    created(){
      Run.Init();
    },
    data() {
      return  {
        value: Run.State.run,
        text: Run.State.run
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
      async deleteRun() {
        try{
          await deleteRun(this.userId);
          this.$router.push('/run')
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
			