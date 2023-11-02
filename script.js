const cuadro_btn = document.querySelectorAll(".cuadro");
const info = document.getElementById("juego-info");
const juego_btn = document.getElementById("juego-boton")
var i = 1;
const jBtn_e =  "pointer-events:initial;opacity:initial;",
      jBtn_d =  "pointer-events:none;opacity:40%;";
let state = false;

var pWin = [ [0,1,2],[3,4,5],[6,7,8],
             [0,3,6],[1,4,7],[2,5,8],
             [0,4,8],[2,4,6]
           ];

function comprobar(){
  juego_btn.style.cssText = jBtn_d;
  for (var j = 0; j < pWin.length;j++){
    if(cuadro_btn[pWin[j][0]].innerHTML === "X" && cuadro_btn[pWin[j][1]].innerHTML === "X" && cuadro_btn[pWin[j][2]].innerHTML === "X" ){
      info.innerHTML = '"X" Gana';
      state = true;
      deshabilitarCasillas();
    }else if(cuadro_btn[pWin[j][0]].innerHTML === "O" && cuadro_btn[pWin[j][1]].innerHTML === "O" && cuadro_btn[pWin[j][2]].innerHTML === "O"){
      info.innerHTML = '"O" Gana';
      state = true;
      deshabilitarCasillas();
    }
  }
  if(cuadro_btn[0].innerHTML != "" && cuadro_btn[1].innerHTML != "" && cuadro_btn[2].innerHTML != "" && cuadro_btn[3].innerHTML !== "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[5].innerHTML != "" && cuadro_btn[6].innerHTML != "" && cuadro_btn[7].innerHTML != "" && cuadro_btn[8].innerHTML != "" && state == false){
    info.innerHTML = "Empate";
    deshabilitarCasillas(false);
  }
    
}

function  deshabilitarCasillas(y){
  (y == false)?i = Math.floor(Math.random() * (3 - 1)) + 1:0;
    for(var n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
      cuadro_btn[n_boton].style.setProperty("pointer-events","none"); 
    } 
  juego_btn.style.cssText = jBtn_e;
}

function nEmpieza(){
  juego_btn.style.cssText = jBtn_d;
  let c1;
  (i % 2 == 0 )?c1= "X":c1= "O"; 
  info.innerHTML = `Presione cualquier cuadro para iniciar: <b>"${c1}"</b> empieza.`;   
}

cuadro_btn.forEach(boton => {
  boton.onclick = function(){
    info.innerHTML = "";
    (i % 2 == 0)?boton.innerHTML = "X": boton.innerHTML = "O";
    comprobar();
    boton.style.setProperty("pointer-events","none"); 
    i++; 
    (i == 3)?i = 1: 0 ;
  }
});

juego_btn.onclick = function(){
  for(var n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
    cuadro_btn[n_boton].style.cssText = "pointer-events:initial;";
    cuadro_btn[n_boton].innerHTML = "";
    state = false;
  }
  nEmpieza();
}

nEmpieza();
