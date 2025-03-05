//campos necesarios para el form
const nameInput1 = document.querySelector("#name");
const nameInput2 = document.querySelector("#name2");
const nameInput3 = document.querySelector("#name3");
const streetInput = document.querySelector("#street");
const zipCodeInput = document.querySelector("#zipCode");
const stateInput = document.querySelector("#state");
const phoneInput = document.querySelector("#phone");

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
            
            
        }
    } else {
        //si lo anterior falla por algun motivo
        alert("ERROR: hubo un error al enviar los datos, intentelo mas tarde.");
        return;
    }
}