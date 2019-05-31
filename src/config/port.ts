
/**
 * Edinson Carranza Saldaña @FullStack
*/

export default class Port {
    is_number:number;

    constructor(){
        /**
         * [is_number port server]
         * @type {Number}
         */
        this.is_number = 3000;
    }

    /**
     * [init method to action running server]
     */
    init(){
        return this.is_number;
    }

}