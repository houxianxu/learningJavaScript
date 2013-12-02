(function() {

    // change the color of the box
    random0_255 = function () {
        return Math.floor(Math.random() * 256);
    }
    var button = document.getElementsByTagName('button'),
        el = document.getElementById('box');

    button[0].onclick = function () {

        var rgb = [0, 0, 0];
        for (var i = 0; i < 3; i ++) 
            rgb[i] = random0_255()
        el.style.backgroundColor = "rgb(" + rgb[0] +"," + rgb[1] + "," + rgb[2] + ")";  
    };


// move the box
    var speed = 10,
        moveBox = function(moveBy) {
            var el = document.getElementById('box'),
                left = el.offsetLeft;

            if ((moveBy > 0 && left > 800) || (moveBy < 0 && left < 50)) {
                clearTimeout(timer);
                timer = setInterval(function () {
                    moveBox(moveBy * -1);
                }, speed)
            }

            el.style.left = left + moveBy + "px";
        };

    var timer = setInterval(function () {
        moveBox(3);
    }, speed);

   
}());

