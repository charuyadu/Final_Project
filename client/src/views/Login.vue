<template>
  <form class="container" @submit.prevent="login">
      {{error}}
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
        <br> <br>
        <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Enter user to check">
            <b-autocomplete
                rounded
                v-model="enter"
                :data="filteredDataArray"
                placeholder="e.g. user name "
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
        </div>
  </form>
</template>

<script>
import { Login } from "../models/Users";
export default {
    data(){
        return {
            email: '',
            password: '',
            error: '',
            enter: '',
            name: '',
            selected: null
                    }
    },
    methods: {
        async login(){
            try {
                await Login(this.email, this.password);
                this.$router.push('/Run');
            } catch (error) {
                this.error = error;
            }
        }, 
        async filteredDataArray() {
            await filteredDataArray(this.enter);
        }
    }
}
</script>

<style>
</style>