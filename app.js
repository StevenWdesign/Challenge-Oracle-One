let logo = document.getElementById("logo-imagen");
const inputText = document.querySelector("#input-texto");
const mensaje = document.querySelector("#mensaje");
//back to normal
function normal() {
  logo.src = "img/conejito logotipo.png";
}
//animation 2frames
logo.onclick = () => {
  logo.src = "img/conejito pestañea.png";
  console.log("ando activo");
  setTimeout(normal, 1000);
};
//0 drag image
document.addEventListener("dragstart", function (evento) {
  if (evento.target.tagName == "IMG") {
    evento.preventDefault();
  }
});

function btnCopiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  console.log("Es un exito");
}

function btnEncriptar() {
  const input = encriptador(inputText.value);
  mensaje.value = input;
  inputText.value = "";
}

function btnDesencriptar() {
  const input = desencriptador(inputText.value);
  mensaje.value = input;
  inputText.value = "";
}

function encriptador(str) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  str = str.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (str.includes(matrizCodigo[i][0])) {
      str = str.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return str;
}

function desencriptador(str) {
  let anoArr = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  str = str.toLowerCase();
  for (let i = 0; i < anoArr.length; i++) {
    if (str.includes(anoArr[i][1])) {
      str = str.replaceAll(anoArr[i][1], anoArr[i][0]);
    }
  }
  return str;
}
