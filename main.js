$(document).ready(function(){

    //numeri da generare randomicamente
    var numbers = [];
    //totale dei numeri da generare
    var numbers_quantity = 5;
    //contatori
    var i = 0;
    var c = 0;
    //minimo e massimo valore generato random
    var min = 1;
    var max = 50;

    do{

        //genera numero random
        var rnd_number = getRndInteger(min,max);
        //mette il numero generato nell'array
        numbers.push(rnd_number);

    //fino al totale dei numeri da generare
    }while(numbers.length < numbers_quantity);

    //stampa su pagina i numeri
    for (var i = 0; i < numbers.length; i++) {
        $('.numbers').append('<div>' + numbers[i] + '</div>');
    }


    //il countdown parte da questo valore
    var count = 5;

    var countdown = setInterval(function() {

        //stampa su pagina il conteggio diminuendolo di 1 ogni secondo
        $('.timer').text(count);
        count--;

        //quando il conteggio arriva a 0
        if (count < 0) {
            //ferma il countdown
            clearInterval(countdown);
            //nasconde i numeri generati
            $('.numbers').addClass('hide');

            //richieste all'utente
            $('h2').text('Quali erano i numeri?');

            //numeri inseriti dall'utente
            var user_numbers = [];

            //aspetta che scompaiano i numeri prima di aprire il prompt
            setTimeout(function(){
                //continua a chiedere numero finche il totale dei due insiemi non è uguale
                while(user_numbers.length != numbers.length) {
                    var user_number = parseInt(prompt('inserire un numero da 1 a 50: '));

                    user_numbers.push(user_number);

                }
            },1);

            console.log(numbers);
            console.log(user_numbers);

            //aspetta che compaia il prompt prima di procedere
            setTimeout(function(){
                //scorre i numeri dell'utente e controlla se corrispondono ai numeri da indovinare
                for (i = 0; i < user_numbers.length; i++) {
                    if(numbers.includes(user_numbers[i])){
                        $('.ok-numbers').append('<div>' + user_numbers[i] + '</div>');
                        //conta i numeri indovinati
                        c++;
                    }
                }

                //se i numeri indovinati sono tanti quanti i numeri da indovinare, stampa vittoria
                if (c == user_numbers.length) {
                    $('.external-box').append('<h1>Hai vinto!!</div>');
                }else{
                    //altrimenti stampa i numeri indovinati e sconfitta
                    $('.external-box').append('<h1>Indovinati ' + c + ' su ' + numbers_quantity + '</div>');
                    $('.external-box').append('<h1>Hai perso..</div>');
                }
            },1000);

        }

  }, 1000);

});

//__________FUNZIONI___________

//rndNumber generator
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
