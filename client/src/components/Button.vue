Vue.component('addColumn', {
    props: ['buttonHolder'],
    template: '<div class="buttons is-centered">
            <button class="button is-dark" v-on:click=""> {{ }} </button>
            </div>'
})

new Vue({
    el: '#app',
    data: {
        cards: ['Run', 'Jog', 'Food']
    }
})