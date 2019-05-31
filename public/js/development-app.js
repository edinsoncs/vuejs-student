/**
 * Edinson Carranza Saldaña @FullStack
 */

var entreprise = ['VIF', 'VIAINTI', 'PASDOG'];
var music = [{name: 'RED BOY', time: 450}, {name: 'RATA BLANCA', time: 1024}];

let increments = {
    p1: 0
}

new Vue({
    el: "#app",
    data: {
        message: 'hi edinson',
        visible: false,
        entreprise: entreprise,
        music: music,
        ready: () => {
           changeColor();
        },
        show_alert: 'EDINSON'
    },
    methods: {
        show: function() {
            this.visible = true;
        }
    }
});


let changeColor = (color) => {
    increments.p1++;
    if(increments.p1 == 1) {
       document.body.style.background = 'black';
    } else {
        document.body.style.background = 'white';
        increments.p1 = 0;
    }
}