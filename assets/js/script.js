
const listaAlgo = $('#algoritimo')

const encodeTexto = (text) => btoa(text)
const decodeTexto = (text) => atob(text)

$('#algoritimo').change(()=>{
    
    let selected = $('#algoritimo option:selected').text()

    if(selected == 'cifra de cêsar'){
        $('#inc').css('display','block')
    }
    else{
        $('#inc').css('display','none')
    }
})
$('input[name=operacao]').on('click',()=>{
    $('#botao').text($('input[name=operacao]:checked').val())
})

$('#incremento').on('mousemove',()=>{

    $('#valorIncremento').text($('#incremento').val())
})

// transforma o texto em base64
$('#botao').on('click',()=>{

    let selected = $('#algoritimo option:selected').val()
    

    const texto = $('#texto').val()
    const radio = $('#codificar')
    const resultado = $('#resultado')

    
    if(radio.is(':checked')){
        if(selected === 'base64'){ resultado.val(encodeTexto(texto))
        }
        else if(selected === 'cifra'){
            calcular()
            console.log(selected);
        }  
    }
    else{
        if(selected === 'base64'){
            resultado.val(decodeTexto(texto))
        }else if (selected === 'cifra'){
            calcular()
        }
        
    }
       
})

// // código cifra de césar
function calcular() {

    let texto = document.querySelector('#texto').value;
    let radio = document.querySelector('#decodificar').checked;
    let resultado = document.querySelector('#resultado');
    let incremento = Number( document.querySelector('#incremento').value);
    let textoCode = '';

    resultado.innerText = ' ';

    let alf = ['A','B','C','D','E','F','G','H','I','J','K','L',
                 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    
    let alfaCode= ['A','B','C','D','E','F','G','H','I','J','K','L',
                     'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    
    for (let i = 0; i < alf.length; i++){
        if(incremento >= alfaCode.length) incremento = 0;
        alfaCode[i] = alf[incremento];
        incremento++;        
    }
    for(let c = 0; c < texto.length; c++){
        let validatAst = /[!|?|,|.|;|:|-]/;
        if(Number(texto[c]) || validatAst.test(texto[c])) textoCode += texto[c];

        for(let idx = 0; idx < alf.length; idx++){
            if(texto[c].trim().length === 0) textoCode += ' ';
            if(radio){
                if(texto[c].toUpperCase() === alfaCode[idx]) textoCode += alf[idx];

            }
            else{
                if(texto[c].toUpperCase() === alf[idx]) textoCode += alfaCode[idx];
            }
        }
    }
    resultado.value = textoCode;
    console.log(textoCode);      
}







