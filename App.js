// always returns data from a function as fresh object othersie data address will be given wherever the data is supplied and changes at one instance will chnage the data at all the other instance


Vue.component('Greeting',{
    template: '<p>Hi, I am {{ name }} <button v-on:click="changeName">  Change Name</button> </p> ',
    data: function (){
        return{
            name:"Muhammad Monis Mazhar"
        }
    },
    methods: {
        changeName: function() {
            this.name = "Muhammad Anas Mazhar";
        }
    }
})

let one = new Vue({
    el:"#vue-app-one",
    
});

let two = new Vue({
    el:"#vue-app-two",
    
})

