new Vue({
  el: '#app',
  data: {
    name: 'Monis Mazhar',
    job: 'Web Developer',
    website: 'https://github.com/SiddiquiMonis401/FirstViewApp',
    age: 25,
    xOffset: 0,
    yOffset: 0
  },
  methods: {
    greet: function (time) {
      return 'Greetings to ' + ' ' + this.name + ' ' + time
    },

    add: function (inc) {
      this.age += inc
    },

    subtract: function (dec) {
      this.age += dec
    },

    setXY: function (event){
        this.xOffset = event.offsetX;
        this.yOffset = event.offsetY;
    }
  }
})
