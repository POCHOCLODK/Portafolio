document.getElementById('img1').addEventListener('click', function(){
    let Informacion=document.getElementById('inf1');
    if (Informacion.style.display==='block') {
        Informacion.style.display='block';        
    }else{
        Informacion.style.display='block';
    }
});

let estiloActual = 'style.css';

document.getElementById('logo').addEventListener('click', function() {
    if (estiloActual === 'style.css') {
        document.getElementById('cambio').href = 'css/style_white.css';
        estiloActual = 'style_white.css';
    } else {
        document.getElementById('cambio').href = 'css/style.css';
        estiloActual = 'style.css';
    }
});