$(document).ready(function(){

    var numbers = [];
    var numbers_quantity = 5;
    var i = 0;
    var min = 1;
    var max = 50;

    do{

        var rnd_number = getRndInteger(min,max);

        numbers.push(rnd_number);

    }while(numbers.length < numbers_quantity);

    for (var i = 0; i < numbers.length; i++) {
        $('.numbers').append('<div>' + numbers[i] + '</div>');
    }



    var count = 5;

    var countdown = setInterval(function() {

        $('.timer').text(count);

        count--;

        if (count < 0) {

            clearInterval(countdown);

            $('.numbers').addClass('hide');

            $('h2').text('Quali erano i numeri?');

            var user_numbers = [];
            while(user_numbers.length != numbers.length) {
                var user_number = parseInt(prompt('inserire un numero da 1 a 50: '));

                    user_numbers.push(user_number);

            }
            
            console.log(numbers);
            console.log(user_numbers);

        }

  }, 1000);

});

//__________FUNZIONI___________

//rndNumber generator
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
