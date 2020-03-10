<template>
<nav class="navbar" role="navigation" aria-label="main navigation">

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">

    <div class="navbar-start">

      <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          About
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            About Us
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Community
          </a>
        </div>
      </div>
     

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Track
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Activity
          </a>
         <hr class="navbar-divider">
          <a class="navbar-item">
            Log
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Share
          </a>
          <hr class="navbar-divider">
        </div>
      </div>
    
          <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          User Support
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Call
          </a>
         <hr class="navbar-divider">
          <a class="navbar-item">
            Chat
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Email
          </a>
          <hr class="navbar-divider">
        </div>
      </div>
</div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
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

  .is-current {
    font-weight: bold;
    color: blueviolet
  }
</style>