// Hormiga Comun

var HormigaComun = function(cantidadDeAlimentoTransportado) {
    this.cantidadDeAlimentoTransportado = cantidadDeAlimentoTransportado;
}

HormigaComun.prototype = {
    recolectar: function(cantidad) {
        this.cantidadDeAlimentoTransportado += cantidad;     
    },
    entregarAlimentoA: function(hormiguero) {
        hormiguero.depositarAlimento(this.cantidadDeAlimentoTransportado);
        this.cantidadDeAlimentoTransportado = 0;
    }
}


// Hormiguero

var Hormiguero = function(cantidadDeAlimento,hormigas){
    this.cantidadDeAlimento = cantidadDeAlimento;
    this.hormigas = hormigas;
}

Hormiguero.prototype = {
    depositarAlimento: function(cantidadAlimento) {
        this.cantidadDeAlimento += cantidadAlimento;
      }, 
      agregarHormiga: function(hormiga) {
        this.hormigas.push(hormiga);
      },
      reclamarAlimento: function(hormiga) {
        this.hormigas.forEach(function(h){
          h.entregarAlimentoA(this);
        }, this);
      },
      expulsar: function(cantidad) {
        this.hormigas.splice(0, 2);
      }
}


// Hormiga Guerrera


var HormigaGuerrera = function() {
};

HormigaGuerrera.prototype = {
    entregarAlimentoA: function(hormiguero) {
    }
};

var unaHormiga = new HormigaGuerrera();