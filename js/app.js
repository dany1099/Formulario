const valor              = document.querySelector('#valor')
const valoracion         = document .querySelector('#valoracion')
const cuentam            = document.querySelector('#cuentam')
const pais               = document.querySelector('#pais')
const ciban              = document .querySelector('#ciban')
const entidad            = document.querySelector('#entidad')
const sucursal           = document.querySelector('#sucursal')
const dc                 = document.querySelector('#dc')
const cuenta             = document.querySelector('#cuenta')
const  fecha             = document.querySelector('#fecha').value;


valor.addEventListener('click',function(){
    alert(`Has valorado con ${valoracion.value} puntos`)
 })

cuentam.addEventListener('click',function(){
    alert(`Le informamos que su cuenta bancaria es ${pais.value}-${ciban.value}-${entidad.value}-${sucursal.value}-${dc.value}-${cuenta.value}`)
})


 function diasemana(){
    const  fecha        = document.querySelector('#fecha').value;
    const  currendate   = new Date(fecha).getDay();
    const  dias         = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo']
    const diaActual     = dias[currendate];
    const  msgg          = 'La fecha de la semana en el elemento fecha es un:' + diaActual
    alert(msgg);
}
    
function diasemana(){
    const fecha    = document.get