new Vue({
  el: '#app',
  data: {
      isRed:false,
      isBlue:true,
  },
  methods: {
   setRed: function () {
       this.isRed = !this.isRed;
       this.isBlue = !this.isBlue;
   }

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
