$(function(){
   
    var palavras = ['css 3','html 5','javascript','php','java','ruby'];

    escrever = (text, i, callback) => {
        if(i < text.length){
            var linha = $('h1');

            linha.html(text.substring(0,i+1) + '<span aria-hidden></span>');

            setTimeout(() => {
                escrever(text, i+1, callback);
            }, 100);
        }else if(typeof callback == 'function'){
            setTimeout(callback, 700);
        }
    }

    iniciar = (i) => {
        if(typeof palavras[i] == 'undefined'){
            setTimeout(() => {
                iniciar(0);
            }, 1000);
        }else{
            var palavraInicial = palavras[i];
            escrever(palavraInicial,0,function(){
                iniciar(i+1);
            })
        }
    }

    iniciar(0);


})