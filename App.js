new Vue({
  el: '#app',
  data: {
      name:"Monis",
      age: 22,
  },
  methods: {
    logName: function(){
        console.log(this.name);

    },

    logAge: function(){
        console.log(this.age);
        
    }

  }
})
