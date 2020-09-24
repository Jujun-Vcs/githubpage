$(document).ready(function ($) {
    var newArray = [];
    var sizeBubble = [14, 18, 22, 26, 30, 34];
    for (var i = 0; i < $('.txtBubble1').width(); i++) {
        newArray.push(i);
    }

    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    setInterval(function () {
        var size = randomValue(sizeBubble);
        $('.txtBubble1').append('<div class="bubble" style="left: ' +
            randomValue(newArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 5000, function () {
            $(this).remove()
        });
    }, 100);
});