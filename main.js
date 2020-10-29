$(document).ready(function(){

    var count = 30;

    var countdown = setInterval(function() {

        $('.timer').text(count);

        count--;

        if (count < 0) {
            clearInterval(countdown);
        }

  }, 1000);

});
