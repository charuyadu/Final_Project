<template>
  <div class="hero">
    <h1 class="title has-text-centered">StayFit</h1>
    <div class="hero-body"> 
      <div class="columns">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <img src="@/images/fitness-apps.jpg" width ="1200" height="1400"/>
            </div>
            <div class="column">
              <h2 class="app is-size-3 has-text-centered "> You are at the right place!</h2>
              <br>
              <p>Do you want to track your daily physical activity such as jogs, run, and exercises? 
                With StayFit you can log the daily activities for your profile and compare. You can enter
                the daily food intake to keep track of the calories consumed in total. You can also
                log the calories spent on a physical activity as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <nav class="navbar is-expanded" role="navigation" aria-label="main navigation">
     <div class="navbar-start is-fixed-bottom">
      <router-link to="/" class="navbar-item is-large has-text-dark">Home</router-link>
      <router-link to="/AboutUs" class="navbar-item has-text-dark">About</router-link>
      <router-link to="/Run" class="navbar-item has-text-dark">Run</router-link>
      <router-link to="/Jog" class="navbar-item has-text-dark">Jog</router-link>
      <router-link to="/Exercise" class="navbar-item has-text-dark">Exercise</router-link>
      <router-link to="/Health" class="navbar-item has-text-dark">Health</router-link>
      <router-link to="/Food" class="navbar-item has-text-dark">Food</router-link>
      <router-link to="/Water" class="navbar-item has-text-dark">Water</router-link>
      <router-link to="/Call" class="navbar-item has-text-dark">Call</router-link>
      <router-link to="/Chat" class="navbar-item has-text-dark">Chat</router-link>
      <router-link to="/Email" class="navbar-item has-text-dark">Email</router-link>
    </div>  
 </nav>


  
    </div>
</template>


<style >
  .hero { background-color:  #08b6ad;
}
</style>