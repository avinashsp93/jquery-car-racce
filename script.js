$(function () {

    // Race button
    var isCompleted = false;
    var place = 'first';
    var carWidth = $('.raceTrack img').width();
    var raceTrackWidth = $(window).width() - carWidth;
    var raceTime1, raceTime2;



    function checkRaceCompletion(car) {
        var whichCar = $(car)[0].alt;
        if(isCompleted == false) {
            isCompleted = true;
        }
        else {
            isCompleted = false;
        }
        $('p#'+whichCar).text('Finished in ' + (isCompleted?' first ':' seond ') + 'place with a time of '+(whichCar=='first_car' ? raceTime1 : raceTime2)+'msecs of time');
    }

    $('#go').click(function () {
        raceTime1 = Math.floor( Math.random() * 5000 + 1);
        raceTime2 = Math.floor( Math.random() * 5000 + 1);

        $('#car1').animate({
            left: raceTrackWidth
        }, raceTime1,function(){
            checkRaceCompletion(this);
        });
        $('#car2').animate({
            left: raceTrackWidth
        }, raceTime2,function(){
            checkRaceCompletion(this);
        });
        $('h4#speedClocked').text("Calculating...")
        setTimeout(function () {
            $('h4#speedClocked').text(Math.round((raceTrackWidth/(raceTime1>raceTime2?raceTime2:raceTime1))*1000)+' px/sec');
        }, 5000);

    })

    $('#reset').click(function () {
        $('p').text('');
        $('.raceTrack img').css({'left':'0'});
    })
})
