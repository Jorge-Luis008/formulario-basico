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
    //la url sin num de pagina para cambiarla despues
    const apiStatesURL = ['https://sepomex.icalialabs.com/api/v1/states?page='] 
    //el id del estado inicial (Aguascalientes)
    var stateID = 0;
    //Variables a cambiar
    var statesPageLength = 0;
    var statesURL = [];

    //Buscar en la pagina correcta por el estado e insertarlo
    let a = 0;
    while (a != 33){
        if(a == 32){break;} //Si por algun motivo la variable se sale del arreglo
        if(a < 15){ //Busca los estados de la primera pagina

            let x = 0;
            var dataStates1 = [];
            statesURL=apiStatesURL+'1'; //la primera pagina de los estados
            const giveState1 = await fetch(statesURL).then(response => response.json()).then(data => {
                dataStates1 = data;
                statesPageLength = data.states.length; //da el numero de estados de la pagina
            })

            while(x < statesPageLength){ //Añade los estados en la pagina uno por uno
                var addState = new Option(dataStates1.states[x].name,x);
                stateList.options.add(addState);
                a++;
                x++;
                if(x > statesPageLength){break;} //para salir del loop while
            }

        } else if(a >= 15 && a < 30){ //Busca los estados de la segunda pagina

            let y = 0;
            var dataStates2 = [];
            statesURL=apiStatesURL+'2'; //segunda pagina
            const giveState2 = await fetch(statesURL).then(response => response.json()).then(data => {
                dataStates2 = data;
                statesPageLength = data.states.length;
            })

            while(y < statesPageLength){ //Añade los estado de la segunda pagina despues de el ultimo de la primera
                var addState2 = new Option(dataStates2.states[y].name,y);
                stateList.options.add(addState2);
                a++;
                y++;
                if(y > statesPageLength){break;}
            }
        } else { //Busca los estados restantes en la tercera y ultima pagina

            let z = 0;
            var dataStates3 = [];
            statesURL=apiStatesURL+'3'; //tercera y ultima pagina
            const giveState3 = await fetch(statesURL).then(response => response.json()).then(data => {
                dataStates3 = data;
                statesPageLength = data.states.length;
            })

            while(z < statesPageLength){ //Añade los estados restantes
                var addState3 = new Option(dataStates3.states[z].name,z);
                stateList.options.add(addState3);
                a++;
                z++;
                if(z > statesPageLength){break;}
            }
        }
    }
    //llamar la funcion para insertar los municipios de Aguascalientes despues de dar cargar todo
    giveMunicipality();
}
giveMunicipality = async function(){
    if(stateList.value==""){
        //console.log(stateList.value)
        municipalityList.disabled = true; //desabilitar el select de los municipios
    } else {
        //console.log(stateList.value)
        municipalityList.disabled = false; //reactivar el select de los municipios
    }
    
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
            break
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

        const url2 = "https://postman-echo.com/post";
        var requestOptions = { //opciones que se requieren por el metodo fetch
            method:'POST',
            mode: 'cors', //posiblemente no sirva completamente y se necesite usar el modo 'no-cors'
            body: JSON.stringify(bodyRequest),
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'https://postman-echo.com/post'
            }
        };

        //fetch para enviar los datos a postman-echo para que este los imprime en la consola
        const respuesta = await fetch(url2,requestOptions).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:',error));

        if (respuesta.ok){ //si la informacion fue enviada
            console.log(respuesta);
            alert("Informacion enviada");
        } else { //si la informaion no fue enviada
            alert("Hubo un ERROR: Informacion NO enviada");
        }
    } else {
        //si por un motivo no se pudo enviar nada
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