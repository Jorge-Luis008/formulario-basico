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

const checkButton1 = document.getElementById("sendForm"); //Boton para enviar los datos

var stateList = document.getElementById("state");
var municipalityList = document.getElementById("municipality");

//Insertar estados al cargar la pagina
async function loadData(){
    //la url con todos los estados
    const apiStatesURL = ['https://sepomex.icalialabs.com/api/v1/states?per_page=32']
    //Variables(?) a cambiar
    let a = 0;
    var dataStates = [];
    var statesPageLength = 0;

    const giveState = await fetch(apiStatesURL).then(response => response.json()).then(data => {
        dataStates = data;
        statesPageLength = data.states.length;
    })

    while(a < statesPageLength){
        if(a==statesPageLength){break;}
        var addState = new Option(dataStates.states[a].name, a);
        stateList.options.add(addState);
        a++;
    }
    //llamar la funcion para insertar los municipios de Aguascalientes despues de dar cargar todo
    giveMunicipality();
}
giveMunicipality = async function(){

    //Reabilitar la opcion de municipios si el estado ya se dio
    municipalityList.disabled = stateList.value=="";
    
    //La variable debe ser +1 ya que el index empieza en 0, y no hay estados con el id de 0
    var selectState = stateInput.selectedIndex + 1;
    
    if (!stateList.value){
        return;
    } else {
        const url1 = ['https://sepomex.icalialabs.com/api/v1/states/'+selectState+'/municipalities']

        var totalMuni=0;
        var data1=0;

        //Busca los por los municipios del estado seleccionado
        const resMuni = await fetch(url1)
        .then(response => response.json())
        .then(data => {
            data1 = data
            totalMuni = data.municipalities.length
        });

        while (municipalityList.options.length){ //elimina los municipios que estaban antes, si habia algunos
            municipalityList.remove(0);
        };
        if(totalMuni){ //añade todos los municipios del estado
            for(var i = 0; i <= totalMuni-1; i++){
                var muni2 = new Option(data1.municipalities[i].name,i)
                municipalityList.options.add(muni2)
            }
        }
    } 
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

    //Buscar en la pagina por el estado
    url2 = ['https://sepomex.icalialabs.com/api/v1/states?per_page=32'];

    //Obtener el numero de estados en la pagina
    const stateName = await fetch(url2).then(response => response.json()).then(data => {
        data2 = data
        stateLength = data.states.length
    })

    //Funcion para buscar el estado correcto y su nombre
    let x = 0;
    while (x < stateLength){
        if (idStart == stateNum){
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
            break;
        }
        y = y + 1;
        idBegin = idBegin + 1;
    }

    //Funcion para validar los campos
    if (validarCampos()){
        var selectState = stateInput.selectedIndex;
        var selectMuni = municipalityInput.selectedIndex;
        var sendState = stateInput[selectState].text
        var sendMuni = municipalityInput[selectMuni].text

        const bodyRequest = {
            nombre: nameInput1.value,
            apellidoPaterno: nameInput2.value,
            apellidoMaterno: nameInput3.value,
            calle: streetInput.value,
            codigoPostal: zipCodeInput.value,
            estado: sendState,
            municipio: sendMuni
        };

        /*
        const url2 = "https://postman-echo.com/post";
        var requestOptions = { //opciones que se requieren por el metodo fetch
            method:'POST',
            mode: 'cors', //posiblemente no sirva completamente y se necesite usar el modo 'no-cors'
            body: JSON.stringify(bodyRequest),
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        };
        //fetch para enviar los datos a postman-echo para que este los imprime en la consola
        try{
            const respuesta = await fetch(url2,requestOptions);
            if(!respuesta.ok){ //si no se regresa una respuesta
                throw new Error(`Response stauts: ${respuesta.status}`);
            }
            const json = await respuesta.json();
            console.log(json);
            alert("Informacion enviada");
        } catch(error){ //si por algun motivo la informacion no se pudo enviar
            console.error(error.message);
            alert("Hubo un ERROR: Informacion NO enviada");
        }
        */
       console.log(bodyRequest);
    } else {
        //Otro failsafe
        alert("ERROR: Verifica que rellenaste todos los campos e intentelo otra vez.");
        return;
    }
}

//funcion para validar todos los campos necesarios/requeridos
function validarCampos(){

    if (!nameInput1.value || !nameInput2.value || !nameInput3.value || !streetInput.value || !zipCodeInput.value ||!stateInput.value || !municipalityInput.value){
        return false;
    }
    return true;
}

//funcion para limpiar lo escrito en el formulario
function clearInput(){
    //Limpiar datos necesarios
    nameInput1.value='';
    nameInput2.value='';
    nameInput3.value='';
    streetInput.value='';
    zipCodeInput.value='';
    stateInput.value="";
    municipalityInput.value='';
    phoneInput.value='';
    //Limpiar datos opcionales
    genderInput0.checked = true;
    genderInput1.checked = false;
    genderInput2.checked = false;
    eduInput0.checked = false;
    eduInput1.checked = false;
    eduInput2.checked = false;
}

//funcion para validar el numero de telefono y no se escriban ni letras ni simbolos, solo numeros
function validatePhoneNumber(event){
    if(isNaN(event.key) && event.key !== 'Backspace'){
        event.preventDefault();
    }
}