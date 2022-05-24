//@ts-check
/**
 *Clase Programador 
 * 
 */
class Programer {


/**
 * @param {{fullname: String}} user Informacion del usuario
 * @param {String} language Lenguaje de programacion
 * 
*/
constructor(user, language){
    this.fullname = user.fullname;
    this.language = language

}

/**
 * 
 * Obetener la informacion del programador
 * @returns{void}
 */
getInfo(){

console.log('Soy ${this.fullname} y mi lenguaje favorito es ${this.language}')

}

}

const ProgramerUno = new Programer({fullname:'Daniel Rodriguez'},'javascript')
const ProgramerDos = new Programer({fullname:'Leonador Dicaprio'},'Python')

ProgramerUno.getInfo();
ProgramerDos.getInfo();
