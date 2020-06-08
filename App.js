new Vue({
    el:"#app",
    data:{
        name:"Monis Mazhar",
        job:'Web Developer',
        website:'https://github.com/SiddiquiMonis401/FirstViewApp'
    },
    methods:{
        greet: function(time){
         return "Greetings to " + " " +  this.name + " "+ time;
        }
    }
})