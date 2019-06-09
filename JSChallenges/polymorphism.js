var bonoPorPresentismo = {
	calcularMontoBono : function(informacion) {
      		sueldoBase = informacion.sueldoBasico;
    		if (informacion.cantidadFaltas == 0) {
            	return sueldoBase / 10 ;
            } else {
              	return 0;
            }
    }
}

var bonoPorCantidadDeVentas = {
	calcularMontoBono : function(informacion) {
    	if(informacion.cantidadVentas > 10 ) {
        	return informacion.sueldoBasico / 4;
        } else {
        	return 0;
        }
    }
}

var bonoNulo = {
	calcularMontoBono : function(informacion) {
      sueldoBase = informacion.sueldoBasico;
      informacion.dineroDisponible = sueldoBase;
    	return 0;
    }
}

var ernesto = {
 	dineroDisponible:0,
	sueldoBasico:1200,
	cantidadVentas:4,
  	cantidadFaltas:0,
	bono:bonoNulo,
  	calcularMontoBono: function() {
    	return this.bono.calcularMontoBono(this);
    },
  	cobrarSueldo: function() {
    	this.dineroDisponible = this.sueldoBasico + this.calcularMontoBono();
    }
};
var ernestina = {
	dineroDisponible:0,             	
  	sueldoBasico:1000,
	cantidadVentas:12,
  	cantidadFaltas:10,
	bono:bonoPorCantidadDeVentas,
  	calcularMontoBono: function() {
    	return this.bono.calcularMontoBono(this);
    },
  	cobrarSueldo: function() {
    	this.dineroDisponible = this.sueldoBasico + this.calcularMontoBono();
    }
};
var anabel = {  
	dineroDisponible:0,              
  	sueldoBasico:1500,
  	cantidadVentas:13,
  	cantidadFaltas:2,
  	bono:bonoPorPresentismo,
  	calcularMontoBono: function() {
    	return this.bono.calcularMontoBono(this);
    },
  	cobrarSueldo: function() {
    	this.dineroDisponible = this.sueldoBasico + this.calcularMontoBono();
    }
};

