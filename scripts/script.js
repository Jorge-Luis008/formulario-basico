//campos necesarios para el form
const nameInput1 = document.getElementById("name"); //Nombre
const nameInput2 = document.getElementById("name2"); //Apellido Paterno
const nameInput3 = document.getElementById("name3"); //Apellido Materno
const streetInput = document.getElementById("street"); //Calle
const zipCodeInput = document.getElementById("zipCode"); //Codigo Postal
const stateInput = document.getElementById("state"); //Estado
const municipalityInput = document.getElementById("municipality") //Municipio
const phoneInput = document.getElementById("phone"); //Telefono

//campos opcionales

const genderInput0 = document.getElementById("genderMale"); //Sexo: Hombre
const genderInput1 = document.getElementById("genderFemale"); //Sexo: Mujer
const genderInput2 = document.getElementById("genderOther"); //Sexo: Otro

const eduInput0 = document.getElementById("eduSecundaria"); //Educacion: Secundaria
const eduInput1 = document.getElementById("eduPrepa"); //Educacion: Preparatoria
const eduInput2 = document.getElementById("eduUni"); //Educacion: Universidad

const checkButton1 = document.getElementById("sendForm");

//Dar municipios

//https://github.com/icaliaLabs/sepoMex <- API para buscar los municipios

giveMunicipality = async function(){
    var stateList = document.getElementById("state");
    var municipalityList = document.getElementById("municipality");

    var selectState = stateList.value;
    const url1 = ['https://sepomex.icalialabs.com/api/v1/states/'+selectState+'/municipalities']

    var totalMuni=0;
    var pls=0;

    const resMuni = await fetch(url1)
    .then(response => response.json())
    .then(data => {
        pls = data
        totalMuni = data.municipalities.length
        console.log(totalMuni)
    });

    while (municipalityList.options.length){
        municipalityList.remove(0);
    };
debugger
    if(totalMuni){
        for(var i = 1; i < totalMuni-1; i++){
            var muni2 = new Option(pls[i],i)
            municipalityList.options.add(muni2)
        }
    }
};
//funcion llamada al dar click en el boton "Enviar"
async function checkButton(){

    if (validarCampos()){
        const bodyRequest = {
            nombre: nameInput1.value,
            apellidoPaterno: nameInput2.value,
            apellidoMaterno: nameInput3.value,
            calle: streetInput.value,
            codigoPostal: zipCodeInput.value,
            estado: stateInput.value,
            municipio: municipalityInput.value
        };

        const url2 = "https://postman-echo.com/post";
        var requestOptions = {
            method:'POST',
            body: JSON.stringify(bodyRequest),
            redirect: 'follow'
        };
        alert("Informacion enviada correctamente.");
    } else {
        //si lo anterior falla por algun motivo
        alert("ERROR: hubo un error al enviar los datos, intentelo mas tarde.");
        return;
    }
}

function validarCampos(){

    if (!nameInput1.value || !nameInput2.value || !nameInput3.value || !streetInput.value || !zipCodeInput.value ||!stateInput.value || !municipalityInput.value){
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
    stateInput.value="";
    municipalityInput.value='';
    phoneInput.value='';
}

function validatePhoneNumber(event){
    event.key
    if(isNaN(event.key) && event.key !== 'Backspace'){
        event.preventDefault();
    }

}