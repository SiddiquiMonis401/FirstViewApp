let one = new Vue({
    el:"#vue-app-one",
    data: {
        title: "View App One",
    },
    computed: {
        greet: function () {
            return ("Hello from View app one");
        }
    }
});

let two = new Vue({
    el:"#vue-app-two",
    data: {
        title: "View App Two",
    },
    methods: {
       changeAppOneTitle: function (title) {
        one.title = title;
       }
    },
    computed: {
        greet: function () {
            return ("Hello from View app two");
        }
    }
})

