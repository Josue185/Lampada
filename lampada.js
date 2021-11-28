const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lampada' );

function lampOn () {
    lamp.src = '/img/ligada.png';
}

function lampOff () {
    lamp.src ='./img/lampada_desligada.png';
}

turnOn.addEventListener ( 'click', lampOn);
turnOff.addEventListener ( 'click', lampOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);