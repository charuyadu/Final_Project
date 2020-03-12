<template>
  <div class="hero">
    <div class="hero-body"> 
      <div class="columns">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <img src="@/images/gym.jpg" width ="500" height="300"/>
            </div>
            <div class="column">
              <h2 class="app is-size-3 has-text-centered "> About Stayfit </h2>
              <br>
              <p>StayFit is for the specific demographic that is aware about proper healthcare, which requires
                exercise as well a healthy diet regime. Our mantra is <i><b>Stay Fit! Stay Healthy!</b></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar is-expanded" role="navigation" aria-label="main navigation">
     <div class="navbar-start is-fixed-bottom">

      <router-link to="/" class="navbar-item is-large has-text-dark">Home</router-link>
      <router-link to="/AboutUs" class="navbar-item has-text-dark">About Us</router-link>
      <router-link to="/Community" class="navbar-item has-text-dark">Community</router-link>
      <router-link to="/Activity" class="navbar-item has-text-dark">Activity</router-link>
      <router-link to="/Log" class="navbar-item has-text-dark">Log</router-link>
      <router-link to="/Share" class="navbar-item has-text-dark">Share</router-link>
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