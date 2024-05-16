///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    alias: '',
    account: '0000003100082210568280',
  },
  completeInfo () {
    presence_response.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=Confirmo mi presencia, ${client.name}!!`
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
    agendar.innerText = `Agendar el día ${evento.fecha.dia}/${evento.fecha.mes} - ${evento.horarioEntrada} Hs.`
    agendar.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${evento.tipo}, ${evento.nombre}!!&details=⭐⭐⭐⭐⭐&dates=${evento.coordenadas[0]}/${evento.coordenadas[1]}location=${evento.direccion}`,
    dresscodeText.innerText = evento.dresscode

  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.completeInfo()
evento.completeInfo()

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);



// Fecha del evento en formato mm/dd/yy
// Convierte la fecha del evento a un objeto de fecha en JavaScript
const fechaEventoJs = new Date("20" + evento.fecha.año, evento.fecha.mes - 1, evento.fecha.dia);

// static_background.style.background = `
//   linear-gradient(rgb(0,0,0,0), 
//     rgb(${0 + dresscode.getBoundingClientRect().bottom/18.375} ,
//     ${0 + dresscode.getBoundingClientRect().bottom/17.294},
//     ${0 + dresscode.getBoundingClientRect().bottom/16.333}))`

Array.from(scroll_container.children).forEach(article => {
  if( article.id != 'transparent' && article.className != 'separator') {
    article.style.backgroundColor = `
      rgba(${0 + dresscode.getBoundingClientRect().bottom/36.296}, 
          ${73 + dresscode.getBoundingClientRect().bottom/32.666}, 
          ${112 + dresscode.getBoundingClientRect().bottom/31.276}, 0.6)`
      }
    })

//DETECION DE ARTICULO VISIBLE//////////////////////////////////////////////////////////////////////////////////
scroll_container.addEventListener('scroll', () => {
// --> Checkea la posicion TOP o BOTTOM de cada articulo
  Array.from(scroll_container.children).forEach(article => {
    var reachToTop = article.getBoundingClientRect().top;
    var reachToBottom = article.getBoundingClientRect().bottom;

    if (article.id == 'transparent' && article.getBoundingClientRect().top == 0) {
        logo.style.filter = `blur(0px)`
        }
      
    if( article.id != 'transparent' && article.className != 'separator') {
      article.style.backgroundColor = `
      rgba(${0 + dresscode.getBoundingClientRect().bottom/36.296}, 
        ${73 + dresscode.getBoundingClientRect().bottom/32.666}, 
        ${112 + dresscode.getBoundingClientRect().bottom/31.276}, 0.6)`
    }
    
    if (reachToTop >= 0 && reachToBottom <= scroll_container.clientHeight) {
        for(element of article.children) {
          if (element.className == 'article_title') {
            element.style.animation = 'showTitle 1s linear'
            element.style.opacity = '1'
          }
        }
    }
  });


  var limiteSuperior = phrase.getBoundingClientRect().top;
  var limiteInferior = dresscode.getBoundingClientRect().bottom;
  let phraseBottom = window.innerHeight - 200
  let phraseTop = 0

  // console.log(dresscode.getBoundingClientRect().bottom)
  dresscodeTop = window.innerHeight // 962
  dresscodeBottom = dresscodeTop * 4 // 3902 --> Recorrido = 2940

  let BGCoeficientR = dresscode.getBoundingClientRect().bottom/18.375
  let BGCoeficientG = dresscode.getBoundingClientRect().bottom/17.294
  let BGCoeficientB = dresscode.getBoundingClientRect().bottom/16.333

  // static_background.style.background = `linear-gradient(rgb(0,0,0,0), rgb(${0 + BGCoeficientR} ,${0 + BGCoeficientG},${0 + BGCoeficientB}))`

  // Array.from(scroll_container.children).forEach(article => {
  //   if( article.id != 'transparent' && article.className != 'separator') {
  //     article.style.backgroundColor = `
  //     rgba(${0 + dresscode.getBoundingClientRect().bottom/36.296}, 
  //       ${73 + dresscode.getBoundingClientRect().bottom/32.666}, 
  //       ${112 + dresscode.getBoundingClientRect().bottom/31.276}, 0.6)`
  //   }
  // })

  var limiteSuperior = phrase.getBoundingClientRect().top;
  var limiteInferior = menu.getBoundingClientRect().bottom;

  // console.log(limiteSuperior)
  
  // console.log((window.innerHeight-(limiteSuperior + 200)))

  background.style.transform = `translateY(${-(window.innerHeight-(limiteSuperior + 200))/1.5}px)`
  background.style.transition = `all 0s ease`

  logo.style.filter = `blur(${(window.innerHeight-(limiteSuperior + 200))/10.5}px)`
  logo.style.opacity = `${1 - ((window.innerHeight-(limiteSuperior + 200))/100.5)}`

  logo.style.transform = `scale(${(1- (window.innerHeight-(limiteSuperior + 200))/25.5*(0.1))})`

  water_before.style.background = `rgb(${224 - (window.innerHeight-(limiteSuperior + 200))/42.2}, ${247 - (window.innerHeight-(limiteSuperior + 200))/43.5}, 250)`
  water_after.style.background = `rgb(${234 - (window.innerHeight-(limiteSuperior + 200))/13.6}, ${246 - (window.innerHeight-(limiteSuperior + 200))/49.3}, 248, .3)`



  })


//COUNTDOWN DEL EVENTO//////////////////////////////////////////////////////////////////////////////////////////
setInterval(function mostrarDiferenciaTiempo() {
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


//IDENTIFICAR POSICION DEL USUARIO//////////////////////////////////////////////////////////////////////////////
// const userPosition = document.getElementById('userPosition');

// async function initMap() {
//   if ("geolocation" in navigator) {
// // --> Obtener las coordenadas de la ubicación actual
//           userPosition.addEventListener('click', function(event) {
//               navigator.geolocation.getCurrentPosition(function (position) {
//               latitud = position.coords.latitude;
//               longitud = position.coords.longitude;
            
//               // console.log(longitud)
//               // console.log(latitud)
//               // userPosition.href = "https://www.google.es/maps/dir/" + latitud + "," + longitud + "/Terrazas+de+San+Jos%C3%A9+Sal%C3%B3n+Bailable,+Presidente+2400,+Av.+Juan+Domingo+Per%C3%B3n,+Yerba+Buena,+Tucum%C3%A1n/@-26.8120634,-65.295557,13z/data=!3m1!4b1!4m18!1m7!3m6!1s0x942242c13b357d5f:0xfb7fce5f1be7ff6c!2sTerrazas+de+San+Jos%C3%A9+Sal%C3%B3n+Bailable!8m2!3d-26.7994286!4d-65.3043288!16s%2Fg%2F11c6_l78wy!4m9!1m1!4e1!1m5!1m1!1s0x942242c13b357d5f:0xfb7fce5f1be7ff6c!2m2!1d-65.3042962!2d-26.7994676!3e0?entry=ttu"
//               userPosition.href = `https://www.google.es/maps/dir/${latitud},${longitud}/${evento.salon}?entry=ttu`

//               // console.log(userPosition.href)
//           })
//           })
//   }}

async function initMap() {
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


