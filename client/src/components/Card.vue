Vue.component('addColumn', {
    props: ['columnHolder'],
    template: '<div class="column">
        <div class="card">
        <div class="card-content">
          <h3 class="subtitle has-text-centered"> {{ card }} </h3>
          <input name="run" v-model="select.run" class="input is-rounded is-hovered is-success" type="text" placeholder="Enter duration"/>
          
          </div>
        </div>
      </div>'
})

new Vue({
    el: '#app',
    data: {
        cards: ['Run', 'Jog', 'Food']
    }
})