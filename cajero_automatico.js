class Billete {
    constructor (v,c){
        this.valor=v;
        this.cantidad=c;
    }
}
function entregarDinero (){

    var t =document.getElementById("dinero");
    dinero=parseInt(t.value);
   
    
    for (var bi  of caja)
    {
        if (dinero>0){
            div=Math.floor(dinero/bi.valor);

        if (div >bi.cantidad)
        {
            papeles=bi.cantidad;
        }
        else {
            papeles=div;
            }
        entregado.push( new Billete (bi.valor, papeles));
        dinero -=(bi.valor * papeles);
        }
    }

        if (dinero >0 ){
            resultado.innerHTML  ="soy un cajero pobre :( ";
    }
        else {
        
            for(var e of entregado) { 
                if (e.cantidad > 0)
                {
                    resultado.innerHTML += e.cantidad + "billetes de $" + e.valor + "<br/>";
                
                }    
        }
    }
}

var caja = [];
var dinero=0;
var entregado=[];
var div=0;
var papeles=0;
caja.push(new Billete(100,5));
caja.push(new Billete(50,10));
caja.push(new Billete(20,15));
caja.push(new Billete(10,10));
caja.push(new Billete(5,5));

var resultado= document.getElementById("resultado");
var b =document.getElementById("extraer");
b.addEventListener("click", entregarDinero);