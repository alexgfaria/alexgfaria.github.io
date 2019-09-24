var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});

$('#countdownExample .startButton').click(function () {
    timer.start();
});


var timer = new Timer();
$('#countdownExample .startButton').click(function () {
    timer.start({
        countdown: true,
        startValues: {
            seconds: 30
        }
    });
});

$('#countdownExample .values').html(timer.getTimeValues().toString());
timer.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString());
});

timer.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('KABOOM!!');
});