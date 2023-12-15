var label1 = document.getElementById('usernameLabel');
var input1 = document.getElementById('username');
var label2 = document.getElementById('passLabel');
var input2 = document.getElementById('pass');
console.log("label1:    ", label1)
console.log("label1:    ", input1)


onLoginInputFocus(label1, input1)
onLoginInputFocus(label2, input2)

function onLoginInputFocus(label, input) {
    input.addEventListener('focus', (e) => {
        console.log("Input seleccionado")
        if(input.value == "") {
            label.classList.add("inputSeleccionado");
        }
    });
    
    input.addEventListener('blur', (e) => {
        console.log("Input des")
        if(input.value == "") {
            label.classList.remove("inputSeleccionado");
        }
    });
}


function changePasswordVisibility() {
    console.log("ola");
    var eye = document.getElementById("passEye");
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }