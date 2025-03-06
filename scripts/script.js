//campos necesarios para el form
const nameInput1 = document.querySelector("#name"); //Nombre
const nameInput2 = document.querySelector("#name2"); //Apellido Paterno
const nameInput3 = document.querySelector("#name3"); //Apellido Materno
const streetInput = document.querySelector("#street"); //Calle
const zipCodeInput = document.querySelector("#zipCode"); //Codigo Postal
const stateInput = document.querySelector("#state"); //Estado
const phoneInput = document.querySelector("#phone"); //Telefono

//campos opcionales

const genderInput0 = document.querySelector("#genderMale"); //Sexo: Hombre
const genderInput1 = document.querySelector("#genderFemale"); //Sexo: Mujer
const genderInput2 = document.querySelector("#genderOther"); //Sexo: Otro

const eduInput0 = document.querySelector("#eduSecundaria"); //Educacion: Secundaria
const eduInput1 = document.querySelector("#eduPrepa"); //Educacion: Preparatoria
const eduInput2 = document.querySelector("#eduUni"); //Educacion: Universidad

const checkButton1 = document.querySelector("#sendForm");

//funcion llamada al dar click en el boton "Enviar"
function checkButton(){
    //checar si los campos necesarios son validos
    const checkValName = nameInput1.checkValidity();
    const checkValName2 = nameInput2.checkValidity();
    const checkValName3 = nameInput3.checkValidity();
    const checkValStreet = streetInput.checkValidity();
    const checkValZipCode = zipCodeInput.checkValidity();
    const checkValState = stateInput.checkValidity();
    const checkValPhone = phoneInput.checkValidity();

    if (checkValName&&checkValName2&&checkValName3&&checkValPhone&&checkValStreet&&checkValZipCode&&checkValState == true){
        const url = "https://postman-echo/post";

        fetch(url,{method:"post"}).then(response=>response.json());
        if (!Response.ok){ //si la respuesta esta valida
            //imprimir en consola los campos importantes
            console.log(nameInput1.value);
            console.log(nameInput2.value);
            console.log(nameInput3.value);
            console.log(streetInput.value);
            console.log(zipCodeInput.value);
            console.log(stateInput.value);
            console.log(phoneInput.value);
            
            //imprimir en consola los campos opcionales si hay

            //Sexo/Genero
            if(genderInput0.checked){
                console.log("Hombre");
            } else if (genderInput1.checked){
                console.log("Mujer");
            } else if (genderInput2.checked){
                console.log("Otro");
            } else {
                console.log("Sexo invalido/no seleccionado");
            }

            //Educacion
            if (eduInput0.checked){
                console.log("Secundaria");
            }
            if (eduInput1.checked){
                console.log("Preparatoria");
            }
            if (eduInput2.checked){
                console.log("Universidad");
            }

            if (!eduInput0.checked && !eduInput1.checked && !eduInput2.checked){
                console.log("Educacion no seleccionada.");
            }

        }
    } else {
        //si lo anterior falla por algun motivo
        alert("ERROR: hubo un error al enviar los datos, intentelo mas tarde.");
        return;
    }
}