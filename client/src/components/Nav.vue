<template>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">


<div class="navbar-brand">
  <figure class="image is-128x128">
    <img class="is-rounded" src="@/images/mobile-image.jpg">
    </figure>
</div>
  <div :class="{ 'is-active':isOpen }" class="navbar-menu">

    <div class="navbar-start">
      <router-link to="/" class="navbar-item is-large has-text-weight-bold" active-class="is-current" exact>Home</router-link>
  
        <div class="navbar-item">
          <router-link to="/AboutUs" class="navbar-item has-text-weight-bold">About Us </router-link>
          <router-link to="/Community" class="navbar-item has-text-weight-bold">Community</router-link>

          <router-link to="/Health" class="navbar-item has-text-weight-bold">Health</router-link>
          <router-link to="/Run" class="navbar-item has-text-weight-bold">Run</router-link>
          <router-link to="/Jog" class="navbar-item has-text-weight-bold">Jog</router-link>
          <router-link to="/Exercise" class="navbar-item has-text-weight-bold">Exercise</router-link>
          <router-link to="/Food" class="navbar-item has-text-weight-bold">Food</router-link>
          <router-link to="/Water" class="navbar-item has-text-weight-bold">Water</router-link>

          <router-link to="/Call" class="navbar-item has-text-weight-bold">Call </router-link>
          <router-link to="/Chat" class="navbar-item has-text-weight-bold">Chat</router-link>
          <router-link to="/Email" class="navbar-item has-text-weight-bold">Email</router-link>
        </div> 

      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/SignUp" class="button is-xl is-dark is-primary has-text-weight-bold">Sign up</router-link>
          <router-link to="/Login" class="button is-light has-text-weight-bold">Login</router-link>
        </div>
      </div>
      </div>
    </div>
</div> 

</nav>



</template>

<script>
export default {
  data: ()=>({
    isOpen: false
  })
}
</script>

<style>
navbar {
    color: #08b6ad;
  }
</style>