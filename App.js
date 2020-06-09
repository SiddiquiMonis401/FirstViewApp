new Vue({
  el: '#app',
  data: {
      age:10,
      a:0,
      b:0,
  },
  methods: {
   

  },
  computed:{
      addToA: function () {
          console.log("Add to A")
          return this.age + this.a;
      },
      addToB: function () {
          console.log("Add to B")
          return this.age + this.b;
      }
  }
})
