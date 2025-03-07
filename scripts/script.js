//campos necesarios para el form
const nameInput1 = document.getElementById("name"); //Nombre
const nameInput2 = document.getElementById("name2"); //Apellido Paterno
const nameInput3 = document.getElementById("name3"); //Apellido Materno
const streetInput = document.getElementById("street"); //Calle
const zipCodeInput = document.getElementById("zipCode"); //Codigo Postal
const stateInput = document.getElementById("state"); //Estado
const phoneInput = document.getElementById("phone"); //Telefono

//campos opcionales

const genderInput0 = document.getElementById("genderMale"); //Sexo: Hombre
const genderInput1 = document.getElementById("genderFemale"); //Sexo: Mujer
const genderInput2 = document.getElementById("genderOther"); //Sexo: Otro

const eduInput0 = document.getElementById("eduSecundaria"); //Educacion: Secundaria
const eduInput1 = document.getElementById("eduPrepa"); //Educacion: Preparatoria
const eduInput2 = document.getElementById("eduUni"); //Educacion: Universidad

const checkButton1 = document.getElementById("sendForm");

//funcion llamada al dar click en el boton "Enviar"
async function checkButton(){

    debugger
    if (validarCampos()){
        const bodyRequest = {
            nombre: nameInput1.value,
            apellido: nameInput2.value
        };

        const url = "https://postman-echo.com/post";

        const response = await fetch(url,
            {
                method:"POST",
                mode:"no-cors",
                headers:{
                    'Content-Type':'application/json',
                    
                }, 
                body: JSON.stringify(bodyRequest)
        });
        console.log(response);
        alert("Informacion enviada correctamente.");
    } else {
        //si lo anterior falla por algun motivo
        alert("ERROR: hubo un error al enviar los datos, intentelo mas tarde.");
        return;
    }
}

function validarCampos(){

    if (!nameInput1.value || !nameInput2.value || !nameInput3.value){
        return false;
    }

    return true;
}

function clearInput(){
    nameInput1.value='';
    nameInput2.value='';
    nameInput3.value='';
    streetInput.value='';
    zipCodeInput.value='';
    stateInput.value='';
    phoneInput.value='';
}

function validatePhoneNumber(event){
event.key
//event.consume para no mostrar la letra en el imput

}