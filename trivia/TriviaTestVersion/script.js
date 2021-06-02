 /*Toma el nombre del Participante, verifica que no sea un campo vacío y lo guarda cuando sea válido*/
function guardarNombre(){
  let playerName=document.getElementById('txtNombreParticipante').value;
  let cleanPlayerName=playerName.trimStart();
  if(cleanPlayerName==null || cleanPlayerName==""){
    errorDeUsuario();
  }
  else{
    localStorage.setItem('nombreDeUsuario',playerName);
    location.href="/SeleccionarTema.html";        
  }
}

function errorDeUsuario(){
  let popup = document.getElementById("myPopupIndex");
  popup.classList.toggle("show");
 }
