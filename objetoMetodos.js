/**
 * Três objetos:
 *  
 * Bernardo
 * Nadyeska
 * Giovani
 * 
 * Três métodos:
 * 
 * Que horas são?
 * Que dia é hoje?
 * Qual a temperatura?
 * 
 * Criar um arquivo para cada objeto ,  por 
 * exemplo bernardo.js ,  nadyeska.js , giovani.js
 */

class Objeto {
    constructor(horario, hoje, temperatura) {
        this.horarioAtual = horario;
        this.dataAtual = data;
        this.temperaturaAtual = temperatura;
    }

    queHorasSao() {
        return this.horarioAtual;
    }

    queDiaEHoje() {
       return this.dataAtual;
    }

    qualATemperatura() {
        return this.temperaturaAtual; 
    }
}