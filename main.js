////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DATOS A COMPLETAR:
let client = {
    name: 'Aixa',
    lastname:'Valentina herrera',
    whatsapp : {
        prefix: '+549',
        phone: 3815775556
    },
    bank: {
        name: 'MercadoPago',
        type: 'CVU',
        alias: 'aixa.630.nave.mp',
        account: '0000003100082210568280',
    },
    completeInfo () {
        presence_confirmation.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=Confirmo mi presencia, ${client.name}!!`
        music_recomendation.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=Te recomiendo este tema, ${client.name}!!`
        food_menu_ask.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=${client.name}, yo necesito modificar mi menú!!`

        client_bank_account.innerHTML = `
        <b>${client.bank.type}</b>: ${client.bank.account}`
        client_bank_alias.innerHTML = `
        <b>Alias</b>: ${client.bank.alias}`
    }
    }

let evento = {
    nombre: 'Fiesta de Aixa',
    tipo: 'Fiesta de 15',
    fecha: {
        dia: '15',
        mes: '06',
        año: '24',
        },
    salon: 'Conticello Salón de Fiestas',
    coordenadas: [-26.76849649806074, -65.21912511097865],
    direccion: 'Ruta 9 kilometro 1301, T4103 Tafí Viejo, Tucumán',
    localidad: 'Tafí Viejo',
    horarioEntrada: '22',
    horarioSalida: '05',
    dresscode: 'Elegante sport 👗👕 Blanco y Negro',

    completeInfo () {
        salon_nombre.innerText = `${evento.salon}`
        salon_localidad.innerText = evento.localidad
        booking.innerText = `Agendar el día ${evento.fecha.dia}/${evento.fecha.mes} - ${evento.horarioEntrada} Hs.`
        booking.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${evento.tipo}, ${evento.nombre}!!&details=⭐⭐⭐⭐⭐&dates=${evento.coordenadas[0]}/${evento.coordenadas[1]}location=${evento.direccion}`,
        dresscodeText.innerText = evento.dresscode
    }
    }

client.completeInfo()
evento.completeInfo()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let maxTop = sectionTransparent.offsetHeight
let maxBottom = sectionDresscode.getBoundingClientRect().bottom

scroll_container.style.background = `linear-gradient(rgb(100, 190, 250), rgb(100, 190, 250)`

//DETECION DE ARTICULO VISIBLE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
scroll_container.addEventListener('scroll', () => {
// --> Checkea la posicion TOP o BOTTOM de cada articulo
    Array.from(scroll_container.children).forEach(section => {
        sectionBottom = section.getBoundingClientRect().bottom
        sectionTop = section.getBoundingClientRect().top

        console.log(scroll_container.offsetHeight/sectionDresscode.getBoundingClientRect().bottom)
        // console.log(scroll_container.offsetHeight)
        if(section != sectionTransparent) {
// --> Presenta los H2 cada ve que la section esta en mitad de pantalla
        if ((sectionTop >= 0 && sectionBottom <= scroll_container.offsetHeight) || (sectionTop <= 0 && sectionBottom >= scroll_container.offsetHeight)) {
        // console.log(section)
            //     // console.log('seccion centrada: ',section)

            Array.from(section.children).forEach(element => {

                if (element.className !== 'extras' && element.className !== 'waves' && element.id != 'contacto') {
                    // element.style.animation = 'showContent .5s ease'
                    element.style.transform = 'scale(1)'
                    element.style.filter = 'blur(0px)'

                    element.style.opacity = '1'
                    element.style.transition = 'transform .5s, opacity 2s, blur .5s'
                    // console.log(element.className)
                }

            })
        }else {
                Array.from(section.children).forEach(element => {
                    if (element.className !== 'extras' && element.className !== 'waves' && element.id != 'contacto') {
                        element.style.transform = 'scale(0)'

                        element.style.opacity = '0'
                        element.style.filter = 'blur(10px)'

                        element.style.transition = 'transform 1s, opacity .25s, blur .5s'

                    }
                // element.style.transform = 'scale(0)'

            })
        }
    }

        let red = (sectionTransparent.offsetHeight - sectionDresscode.getBoundingClientRect().bottom) / ((maxTop-maxBottom) / 100)
        let green = (sectionTransparent.offsetHeight - sectionDresscode.getBoundingClientRect().bottom) / ((maxTop-maxBottom) / 180)
        let blue = (sectionTransparent.offsetHeight - sectionDresscode.getBoundingClientRect().bottom) / ((maxTop-maxBottom) / 200)

        scroll_container.style.background = `linear-gradient(rgb(${0 + red}, ${10 + green}, ${50 + blue}), rgb(${0 + red}, ${10 + green}, ${50 + blue}) 90%`

        })
        // console.log(map.offsetTop)
    });



//COUNTDOWN DEL EVENTO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(function mostrarDiferenciaTiempo() {
// Formatea la fecha del evento
const fechaEventoJs = new Date("20" + evento.fecha.año, evento.fecha.mes - 1, evento.fecha.dia)

// Obtiene la fecha y hora actual
    const fechaActual = new Date();

// Calcula la diferencia en milisegundos
    var diferencia = fechaEventoJs - fechaActual;

// Convierte la diferencia a días, horas y minutos
    var diasFaltantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horasFaltantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutosFaltantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundosFaltantes = Math.floor((diferencia % (1000 * 60)) / 1000);

// Imprime el resultado solo cuando cambia el minuto
  // console.log("Días faltantes: " + diasFaltantes);
    days.innerText = diasFaltantes

  // console.log("Horas faltantes: " + horasFaltantes);
    hours.innerText = horasFaltantes

  // console.log("Minutos faltantes: " + minutosFaltantes);
    minutes.innerText = minutosFaltantes

  // console.log("Segundos faltantes: " + segundosFaltantes);
    seconds.innerText = segundosFaltantes

  // Actualiza el valor de los minutos
    mostrarDiferenciaTiempo.minutos = minutosFaltantes;
}, 1000);

//IDENTIFICAR POSICION DEL USUARIO Y LLEVAR AL EVENTO////////////////////////////////////////////////////////////////////////////////////////////
async function initMap() {
    // event_location.src = `<div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;"><div id="gmap-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=conticello+salon+de+fiestas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="googl-ehtml" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="inject-map-data">premium bootstrap themes</a><style>#gmap-canvas img{max-height:none;max-width:none!important;background:none!important;}</style></div>`
// --> Checkea que geolocalizacion este habilitada
    if ("geolocation" in navigator) {
    await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
        })

    navigator.geolocation.getCurrentPosition((position) => {
// --> Obtener las coordenadas de la ubicación actual
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;

 // --> Construir el enlace de Google Maps con las coordenadas de ubicación
        userPosition.href = `https://www.google.es/maps/dir/${latitud},${longitud}/${evento.salon}?entry=ttu`
    })
    }else {
    // Manejar el caso en el que la geolocalización no está disponible en el dispositivo
    console.error("La geolocalización no está disponible en este dispositivo.");
    }
}      
initMap()

// --> OTHERS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DETECCION DE BROWSER
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera, the true version is after "OPR" or after "Version"
if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset+4);
    if ((verOffset=nAgt.indexOf("Version"))!=-1) 
        fullVersion = nAgt.substring(verOffset+8);
}
// In MS Edge, the true version is after "Edg" in userAgent
else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
    browserName = "Microsoft Edge";
    fullVersion = nAgt.substring(verOffset+4);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1) 
        fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
    browserName = nAgt.substring(nameOffset,verOffset);
    fullVersion = nAgt.substring(verOffset+1);
    if (browserName.toLowerCase()==browserName.toUpperCase()) {
    browserName = navigator.appName;
    }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1) fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1) fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
    fullVersion  = ''+parseFloat(navigator.appVersion); 
    majorVersion = parseInt(navigator.appVersion,10);
    }

// document.write(''
//  +'Browser name  = '+browserName+'<br>'
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent+'<br>'
//)


//DETECCION DE OS
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

// document.write('Your OS: '+OSName);

// HIDE SENSITIVE INFO ON EPA WEBSITE
window.addEventListener('message', (event) => {
  if (event.data.action === 'hideSensitiveInfo') {
      // Ocultar o cambiar contenido sensible aquí
      const client_bank_account = document.getElementsByClassName('client_bank_account');
      if (client_bank_account) {
        Array.from(client_bank_account).forEach(element => {
          console.log(element)
          element.textContent = 'CBU/CVU/ALIAS'
      })
        console.log(client_bank_account)
      }
  }
});
