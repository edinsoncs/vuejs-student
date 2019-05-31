/**
 * Edinson Carranza Saldaña @FullStack
 */


new Vue({

    el: "#app",
    data: {
        message: 'hi edinson',
        visible: false
    },
    methods: {
        show: function() {
            this.visible = true;
        }
    }

})