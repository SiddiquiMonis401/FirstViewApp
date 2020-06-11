new Vue({
  el: '#app',
  data: {
    isPunched: false,
    punchedCount: 0,
    punchedImage:false,
  },
  methods: {
    setAndCountPunch: function () {
        if(this.punchedImage){
            return;
        }
        if(!this.isPunched)
        {
            this.isPunched = true;
        }
        this.punchedCount ++;
        this.punchedImage = true;
        setTimeout(()=>{
            console.log("executed")
            this.punchedImage = false;

        },500)

    },

    resetCount: function() {
        this.punchedCount = 0;
        this.punchedImage = false;
        this.isPunched = false; 
    }
  },
  computed:{

  }
})
