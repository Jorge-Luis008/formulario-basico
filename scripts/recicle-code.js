// CODIGO QUE PUEDE SER UTIL DESPUES

// HTML

/*
<option value="2" name="bajaCalifornia">Baja California</option>
<option value="3" name="bajaCaliforniaSur">Baja California Sur</option>
<option value="8" name="chihuahua">Chihuahua</option>
<option value="10" name="durango">Durango</option>
<option value="14" name="jalisco">Jalisco</option>
<option value="18" name="nayarit">Nayarit</option>
<option value="19" name="nuevoLeon">Nuevo Leon</option>
<option value="25" name="sinaloa">Sinaloa</option>
<option value="26" name="sonora">Sonora</option>
<option value="32" name="zacatecas">Zacatecas</option>
*/

// CSS

/*
body{
    width: 900px;
    margin: 0 auto;
    margin-top: 20px;
    border: solid black;
}
h1{
    text-align: center;
    font-family: sans-serif;
}

p#datosGenerales{
    display: flex;
}
input#name,input#name2,input#name3{
    margin-right: 25px;
}

p#direcciones{
    display: flex;
}
fieldset#stateField,fieldset#municipalityField{
    margin-right: 25px;
    font-family: sans-serif;
    width: 120px;
}
input#street,input#zipCode,select#state,select#municipality{
    margin-right: 25px;
}

p#datosExtra{
    display: flex;
}
input#phone,fieldset#gender{
    margin-right: 25px;
    font-family: sans-serif;
}

fieldset#education{
    margin-right: 25px;
    font-family: sans-serif;
}

input#name,input#name2,input#name3,input#street,input#zipCode,select#state,select#municipality,input#phone,fieldset#stateField,fieldset#municipalityField,fieldset#gender,fieldset#education{
    margin-left: 25px;
}
input#send{
    position: sticky; right: 0;
}
p#buttons{
    margin: 25px;
}
*/

// JAVASCRIPT
/*

// MUNICIPIOS DE 10 ESTADOS 
const municipiosOpciones = {};
    municipiosOpciones['']=['--Seleccione un municipio--']
    municipiosOpciones['sinaloa'] = ["1-Ahome","2-Angostura","3-Badiraguato","4-Concordia","5-Cosalá","6-Culiacán","7-Choix","8-Elota","9-Escuinapa","10-El Fuerte",
            "11-Guasave","12-Mazatlán","13-Mocorito","14-El Rosario","15-Salvador Alvarado","16-San Ignacio","17-Sinaloa","18-Navolato","19-Eldorado","20-Juan José Ríos"];
    municipiosOpciones['sonora'] = ["1-Aconchi","2-Agua Prieta","3-Álamos","4-Altar","5-Arivechi","6-Arizpe","7-Átil","8-Bacadéhuachi","9-Bacanora","10-Bacerac",
            "11-Bacoachi","12-Bácum","13-Banámichi","14-Baviácora","15-Bavispe","16-Benjamín Hill","17-Caborca","18-Cajeme","19-Cananea","20-Carbó",
            "21-La Colorada","22-Cucurpe","23-Cumpas","24-Divisaderos","25-Empalme","26-Etchojoa","27-Fronteras","28-Granados","29-Guaymas","30-Hermosillo",
            "31-Huachinera","32-Huásabas","33-Huatabampo","34-Huépac","35-Ímuris","36-Magdalena","37-Mazatán","38-Moctezuma","39-Naco","40-Nácori Chico",
            "41-Nacozari de García","42-Navojoa","43-Nogales","44-Ónavas","45-Opodepe","46-Oquitoa","47-Pitiquito","48-Puerto Peñasco","49-Quiriego","50-Rayón",
            "51-Rosario","52-Sahuaripa","53-San Felipe de Jesús","54-San Javier","55-San Luis Río Colorado","56-San Miguel de Horcasitas","57-San Pedro de la Cueva","58-Santa Ana","59-Santa Cruz","60-Sáric",
            "61-Soyopa","62-Suaqui Grande","63-Tepache","64-Trincheras","65-Tubutama","66-Ures","67-Villa Hidalgo","68-Villa Pesqueira","69-Yécora","70-General Plutarco Elías Calles",
            "71-Benito Juárez","72-San Ignacio Río Muerto"];
    municipiosOpciones['nayarit'] = ["1-Acaponeta","2-Ahuacatlán","3-Amatlán de Cañas","4-Compostela","5-Huahicori","6-Ixtlán del Rio","7-Jala","8-Xalisco","9-Del Nayar","10-Rosamorada",
            "11-Ruiz","12-San Blas","13-San Pedro Langunillas","14-Santa María del Oro","15-Santiago Ixcuintla","16-Tecuala","17-Tepic","18-Tuxpan","19-La Yesca","20-Bahía de Banderas"];
    municipiosOpciones['durango'] = ["1-Canatlán","2-Canelas","3-Coneto de Comonfort","4-Cuencamé","5-Durango","6-General Simón Bolívar","7-Gómez Palacio","8-Guadalupe Victoria","9-Guanaceví","10-Hidalgo",
            "11-Indé","12-Lerdo","13-Mipimí","14-Mezquital","15-Nazas","16-Nombre de Dios","17-Ocampo","18-El Oro","19-Otáez","20-Pánuco de Coronado",
            "21-Peñón Blanco","22-Poanas","23-Pueblo Nuevo","24-Rodeo","25-San Bernardo","26-Sandimas","27-San Juan de Guadalupe","28-San Juan del Río","29-San Luis del Cordero","30-San Pedro del Gallo",
            "31-Santa Clara","32-Santiago Papasquiaro","33-Súchil","34-Tamazula","35-Tepehuanes","36-Tlahualito","37-Topia","38-Vicente Guerrero","39-Nuevo Ideal"];
    municipiosOpciones['chihuahua'] = ["1-Ahumada","2-Aldama","3-Allende","4-Aquiles Serdán","5-Ascensión","6-Bachíniva","7-Balleza","8-Batopilas de Manuel Gómez Morín","9-Bocoyna","10-Buenaventura",
                "11-Camargo","12-Carichí","13-Casas Grandes","14-Coronado","15-Coyame del Sotol","16-La Cruz","17-Cuauhtémoc","18-Cusihuiriachi","19-Chihuahua","20-Chínipas",
                "21-Delicias","22-Dr. Belisario Domínguez","23-Galeana","24-Santa Isabel","25-Gómez Farías","26-Gran Morelos","27-Guachochi","28-Guadalupe","29-Guadalupe y Calvo","30-Guazapares",
                "31-Guerrero","32-Hidalgo del Parral","33-Huejotitán","34-Ignacio Zaragoza","35-Janos","36-Jiménez","37-Juárez","38-Julimes","39-López","40-Madera",
                "41-Maguarichi","42-Manuel Benavides","43-Matachí","44-Matamoros","45-Meoqui","46-Morelos","47-Moris","48-Namiquipa","49-Nonoava","50-Nuevo Casas Grandes",
                "51-Ocampo","52-Ojinaga","53-Práxedis G. Guerrero","54-Riva Palacio","55-Rosales","56-Rosario","57-San Francisco de Borja","58-San Francisco de Conchos","59-San Francisco del Oro","60-Santa Bárbara",
                "61-Satevó","62-Saucillo","63-Temósachic","64-El Tule","65-Urique","66-Uruachi","67-Valle de Zaragoza"];
    municipiosOpciones['zacatecas'] = ["1-Apozol","2-Apulco","3-Atolinga","4-Benito Juárez","5-Calera","6-Cañitas de Felipe Pescador","7-Concepción del Oror","8-Cuauhtémoc","9-Chalchihuites","10-Fresnillo",
                "11-Trinidad García de la Cadena","12-Genaro codina","13-General Enrique Estrada","14-General Fransico R. Murquía","15-El Plateado de Joaquín Amaro","16-General Pánfilo Natera","17-Guadalupe","18-Huanusco","19-Jalpa","20-Jerez",
                "21-Jimenez de Teul","22-Juan Aldama","23-Juchipila","24-Loreto","25-Luis Moya","26-Mazapil","27-Melchor Ocampo","28-Mezquital del Oro","29-Miguel Auza","30-Momax",
                "31-Monte Escobedo","32-Morelos","33-Moyahua de Estrada","34-Nochistlán de Mejía","35-Noria de Ángeles","36-Ojocaliente","37-Pánuco","38-Pinos","39-Río Grande","40-Sain Alto",
                "41-El Salvador","42-Sombrerete","43-Susticacán","44-Tabasco","45-Tepechitlán","46-Tepetongo","47-Teúl de González Ortega","48-Tlaltenango de Sánchez Róman","49-Valparaíso","50-Vetagrande",
                "51-Villa de Cos","52-Villa García","53-Villa González ortega","54-Villa Hidalgo","55-Villanueva","56-Zacatecas","57-Trancoso","58-Santa María de la Paz"];
    municipiosOpciones['jalisco'] = ["1-Acatic","2-Acatlán de Juárez","3-Ahualulco de Mercado","4-Amacueca","5-Amatitán","6-Ameca","7-San Juanito de Escobedo","8-Arandas","9-El Arenal","10-Atemajac de Brizuela",
            "11-Atengo","12-Atenguillo","13-Atotonilco el Alto","14-Atoyac","15-Autlán de Navarro","16-Ayotlán","17-Ayutla","18-El Barca","19-Bolaños","20-Cabo Corrientes",
            "21-Casimiro Castillo","22-Cihuatlán","23-Zapopan el Grande","24-Cocula","25-Colotlán","26-Concepción de Buenos Aires","27-Cuautitlán de García Barragán","28-Cuautla","29-Cuquío","30-Chalapa",
            "31-Chimaltitán","32-Chiquilistlán","33-Degollado","34-Ejutla","35-Encarnación de Díaz","36-Etzatlán","37-El Grullo","38-Guachinango","39-Guadalajara","40-Hostopauillo",
            "41-Huejúcar","42-Huejuquilla el Alto","43-La Huerta","44-Ixtlahuacán de los Membrillos","45-Ixtlahuacán del Río","46-Jalostotitlán","47-Jamay","48-Jesús María","49-Jilotlán de los Dolores","50-Jacotepec",
            "51-Juanacatlán","52-Juchitlán","53-Lagos de moreno","54-El Limón","55-Magdalena","56-Santa María del Oro","57-La Manzanilla de la Paz","58-Mascota","59-Mazamitla","60-Mexticacán",
            "61-Mezquitic","62-Mixtlán","63-Ocotlán","64-Ojuelos de Jalisco","65-Pihuamo","66-Poncitlán","67-Puerto Vallarta","68-Villa Purificación","69-Quitupan","70-El Salto",
            "71-San Cristóbal de la Barranca","72-San Diego de Alejandría","73-San Juan de los lagos","74-San Julián","75-San Marcos","76-San Martín de Bolaños","77-San Martín Hidalgo","78-San Miguel el Alto","79-Gómez Farías","80-San Sebastián del Oeste",
            "81-Santa maría de los Ángeles","82-Satula","83-Tala","84-Talpa de Allende","85-Tamazula de Gordiano","86-Tapalpa","87-Tecalitlán","88-Techaluta de Monetenegro","89-Tecolotlán","90-Tenamaxtlán",
            "91-Teocaltiche","92-Teocuitatlán de Corona","93-Tepatitlán de Morelos","94-Tequila","95-Teuchitlán","96-Tizapán el Alto","97-Tlajomulco de Zúñiga","98-San Pedro Tlaquepaque","99-Tolimán","100-Tomatlán",
            "101-Tonalá","102-Tonaya","103-Tonila","104-Totatiche","105-Tototlán","106-Tuxcacuesco","107-Tuxcueca","108-Tuxpan","109-Unión de San Antonio","110-Unión de Tula",
            "111-Valle de Guadalupe","112-Valle de Júarez","113-San Gabriel","114-Villa Corona","115-Villa Guerrero","116-Vila Hidalgo","117-Cañadas de Obregón","118-Yahualica de González Gallo","119-Zacoalco de Torres","120-Zapopan",
            "121-Zapotiltic","122-Zapotitlán de Vadillo","123-Zapotlán del Rey","124-Zapotlanejo","125-San Ignacio Cerro Gordo"];
    municipiosOpciones['nuevoLeon'] = ["1-Abasolo","2-Agualeguas","3-Los Aldamas","4-Allende","5-Anáhuac","6-Apodaca","7-Aramberri","8-Bustamante","9-Cadereyta Jiménez","10-El Carmen",
            "11-Cerralvo","12-Ciénega de Flores","13-China","14-Doctor Arroyo","15-Doctor Coss","16-Doctor González","17-Galeana","18-García","19-San Pedro Garze García","20-General Bravo",
            "21-General Escobedo","22-General Terán","23-General Treviño","24-General Zaragoza","25-General Zuazua","26-Guadalupe","27-Los Herreras","28-Higueras","29-Hualahuises","30-Iturbide",
            "31-Juárez","32-Lampazos de Naranjo","33-Linares","34-Marín","35-Melchor Ocampo","36-Mier y Noriega","37-Mina","38-Montemorelos","39-Monterrey","40-Parás",
            "41-Pesquería","42-Los Ramones","43-Rayones","44-Sabinas Hidalgo","45-Salinas Victoria","46-San Nicolás de los Garza","47-Hidalgo","48-Santa Catarina","49-Santiago","50-Vallecillo",
            "51-Villaldama"];
    municipiosOpciones['bajaCalifornia'] = ["1-Ensenada","2-Mexicali","3-Tecate","4-Tijuana","5-Playas de Rosarito","6-San Quintín","7-San Felipe"];
    municipiosOpciones['bajaCaliforniaSur'] = ["1-Comondú","2-Mulegé","3-La Paz","4-Los Cabos","5-Loreto"];

    // NO ME ACUERDO lmao
    giveState = async function(){

    fetch('https://sepomex.icalialabs.com/api/v1/states?page=1')
    .then(response => response.json())
    .then(data => {
        const totalSates = data.meta.pagination.total_objects;
        console.log(totalSates);
    });

    for(var i = 0; i < totalSates; i++){}
    }
    
    // IMPRIMIR LOS MUNICIPIOS EN EL SELECT OPTION
    var stateList = document.getElementById("state");
    var municipalitylist = document.getElementById("municipality");

    var selectState = stateList.value;
    
    var stat = municipiosOpciones[selectState];
    if(stat){
        var stat2=0;
        for(var i=0;i<Object.keys(stat).length;i++){
            stat2=new Option(stat[i],i);
            municipalitylist.options.add(stat2);
        };
    }
    
    // CODIGO FETCH() VIEJO
       await fetch(url,requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error',error));
        console.log(response)
    */

    //CODIGO PARA OBTENER EL NOMBRE DEL ESTADO SEGUN EL API
    /*
        if(stateLength){
                for(var x = 0; x !== stateLength - 1 || idStart==data2.states[x].id; x,idStart++){
                var state2 = data2.states[x].name,x
        } else {}
    }

    //CODIGOS DE BUSCAR ESTADOS VIEJO
    
    while (stateID<=32){
        if (stateID>=16 && stateID<=30){
            statesURL = ['https://sepomex.icalialabs.com/api/v1/states?page=2']
        } else if (stateID<30){
            statesURL = ['https://sepomex.icalialabs.com/api/v1/states?page=3']
        } else if (stateID=33){
            break;
        }

        //se crea un elemento option en los estados
        const optionState = document.createElement("option")

        //se da su valor correspondiente al id del estado
        optionState.value = stateID

        optionState.text = 
        stateID++;
    }

    while(stateID != 33){
        var a = 0;
        if(stateID<15){
            statesURL = apiStatesURL+'1'
            await fetch(statesURL).then(data => {
                var data1 = data;
                maxStatePage = data1.states.length;
            })
            while(a < maxStatePage){
                var addState = new Option(data1.states[stateID].name)
                stateList.options.add(addState)
                stateID++
                a++
                if(stateID=15){break;}
            }
        } else if(stateID>=15 && stateID<=30){
            statesURL = apiStatesURL+'2'
            fetch(statesURL).then(data => {
                var data2 = data;
                maxStatePage = data2.states.length;
            })
            while(a < maxStatePage){
                var addState = new Option(data2.states[stateID].name)
                stateList.options.add(addState)
                stateID++
                a++
                if(stateID=31){break;}
            }
        } else if(stateID>30){
            statesURL = apiStatesURL+'3'
            fetch(statesURL).then(data => {
                var data3 = data;
                maxStatePage = data3.states.length;
            })
            while(a < maxStatePage){
                var addState = new Option(data3.states[stateID].name)
                stateList.options.add(addState)
                stateID++
                a++
                if(stateID=33){break;}
            }
        }
    }
    { 
        if(stateList.value==""){
            //console.log(stateList.value)
            municipalityList.disabled = true; //desabilitar el select de los municipios
        } else {
            //console.log(stateList.value)
            municipalityList.disabled = false; //reactivar el select de los municipios
        }
    }

    // BUSCAR ESTADOS PAGINA POR PAGINA
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
*/