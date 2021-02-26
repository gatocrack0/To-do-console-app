const { v4: uudiv5 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = uudiv5();
        this.desc = desc;
        this.completadoEn = null;

    }

}


module.exports = Tarea;

