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

//https://github.com/icaliaLabs/sepoMex <- API para buscar los municipios

var stateList = document.getElementById("state");
var municipalityList = document.getElementById("municipality");

//Insertar estados al cargar la pagina
async function loadData(){
    //la url sin num de pagina para cambiarla despues
    const apiStatesURL = ['https://sepomex.icalialabs.com/api/v1/states?page='] 
    //el id del estado inicial (Aguascalientes)
    var stateID = 0;
    //Variables a cambiar
    var statesPageLength = 0;
    var statesURL = [];
    var correctData = 0;

    //Buscar en la pagina correcta por el estado e insertarlo
    let a = 0;
    while (a != 30){
        if(a == 33){break;} //Si por algun motivo la variable se sale del arreglo
        if(a < 14){

            let x = 0;
            var dataStates1 = [];
            statesURL=apiStatesURL+'1';
            const giveState1 = await fetch(statesURL).then(response => response.json()).then(data => {
                dataStates1 = data;
                statesPageLength = data.states.length - 1;
            })

            while(x < statesPageLength){
                var addState = new Option(dataStates1.states[x].name,x);
                stateList.options.add(addState);
                a++;
                x++;
                if(x == statesPageLength){break;}
            }

        } else if(a >= 14 && a < 28){

            let y = 0;
            var dataStates2 = [];
            statesURL=apiStatesURL+'2';
            const giveState2 = await fetch(statesURL).then(response => response.json()).then(data => {
                dataStates2 = data;
                statesPageLength = data.states.length - 1;
            })

            while(y < statesPageLength){
                var addState2 = new Option(dataStates2.states[y].name,y);
                stateList.options.add(addState2);
                a++;
                y++;
                if(y == statesPageLength){break;}
            }
        } else { debugger

            let z = 0;
            var dataStates3 = [];
            statesURL=apiStatesURL+'3';
            const giveState3 = await fetch(statesURL).then(response => response.json()).then(data => {
                dataStates3 = data;
                statesPageLength = data.states.length - 1;
            })

            while(z <= statesPageLength){
                var addState3 = new Option(dataStates3.states[z].name,z);
                stateList.options.add(addState3);
                a++;
                z++;
                if(z > statesPageLength){break;}
            }
        }
    }

}
giveMunicipality = async function(){
    if(stateList.value==""){
        console.log(stateList.value)
        municipalityList.disabled = true; //desabilitar el select de los municipios
    } else {
        console.log(stateList.value)
        municipalityList.disabled = false; //reactivar el select de los municipios
    }
    
    var selectState = stateList.value;
    /*
    if (!stateList.value){
        return;
    } else {
        const url1 = ['https://sepomex.icalialabs.com/api/v1/states/'+selectState+'/municipalities']

        var totalMuni=0;
        var data1=0;

        const resMuni = await fetch(url1)
        .then(response => response.json())
        .then(data => {
            data1 = data
            totalMuni = data.municipalities.length
        });

        while (municipalityList.options.length){
            municipalityList.remove(0);
        };
        if(totalMuni){
            for(var i = 0; i <= totalMuni-1; i++){
                var muni2 = new Option(data1.municipalities[i].name,i)
                municipalityList.options.add(muni2)
            }
        }
    } */
}
    
//funcion llamada al dar click en el boton "Enviar"
async function checkButton(){
    var stateNum = stateInput.value;
    var muniNum = municipalityInput.value;

    //BUSCAR EL NOMBRE DEL ESTADO
    //Variables a cambiar
    var data2 = 0;
    var stateLength = 0;
    var url2 = [0];
    var idStart = 0;

    //Buscar la pagina que contenga el estado correcto
    if (stateNum<=15){
        url2 = ['https://sepomex.icalialabs.com/api/v1/states?page=1'];
        idStart = 1;
    } else if(stateNum>=16 && stateNum<=30){
        url2 = ['https://sepomex.icalialabs.com/api/v1/states?page=2'];
        idStart = 16;
    } else if(stateNum>30){
        url2 = ['https://sepomex.icalialabs.com/api/v1/states?page=3'];
        idStart = 31;
    }

    //Obtener el numero de estados en la pagina
    const stateName = await fetch(url2).then(response => response.json()).then(data => {
        data2 = data
        stateLength = data.states.length
    })

    //Funcion para buscar el estado correcto y su nombre
    let x = 0;
    while (x < stateLength){
        if (idStart == stateNum ){
            var state2 = data2.states[x].name;
            break;
        }
        x = x + 1;
        idStart = idStart + 1;
    }

    //BUSCAR EL NOMBRE DEL MUNICIPIO
    //Variables a cambiar
    var data3 = 0;
    var muniLength = 0;
    var idBegin = 0;

    //Buscar la pagina del estado con sus municipios
    var selState2 = stateList.value;
    const url3 = ['https://sepomex.icalialabs.com/api/v1/states/'+selState2+'/municipalities'];

    //Obtener el numero de municipios en la pagina
    const muniNumb = await fetch(url3).then(response2 => response2.json()).then(data => {
        data3 = data;
        muniLength = data.municipalities.length;
    })

    //Funcion para buscar el municipio correcto y su nombre
    let y = 0;
    while (y < muniLength){
        if (idBegin == muniNum ){
            var muni2 = data3.municipalities[y].name;
            break
        }
        y = y + 1;
        idBegin = idBegin + 1;
    }

    //Funcion para validar los campos
    if (validarCampos()){
        const bodyRequest = {
            nombre: nameInput1.value,
            apellidoPaterno: nameInput2.value,
            apellidoMaterno: nameInput3.value,
            calle: streetInput.value,
            codigoPostal: zipCodeInput.value,
            estado: state2,
            municipio: muni2
        };

        const url2 = "https://postman-echo.com/post";
        var requestOptions = {
            method:'POST',
            body: JSON.stringify(bodyRequest),
            headers: {
                'Content-Type':'application/json'
            }
        };

        const respuesta = await fetch(url2,requestOptions).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:',error));

        console.log(respuesta);
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
    //event.key
    if(isNaN(event.key) && event.key !== 'Backspace'){
        event.preventDefault();
    }

}