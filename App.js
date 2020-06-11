new Vue({
    el: "#vue-app",
    data:{
        favouriteFood: "N/A",
    },
    methods: {
        changeFood: function () {
            this.favouriteFood = this.$refs.input.value;
        } 
    } 
})