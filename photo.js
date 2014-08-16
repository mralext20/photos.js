    var currphoto;
    var timer;
    currphoto = 1;
	var photoTotal;
	var imgWidth;
        function next() {
            if(currphoto == photoTotal) {
                currphoto = 1
            } else {
                currphoto++
            }
            document.getElementById("gallery").innerHTML = '<img width='+imgWidth+'px src="screenshots/' + currphoto + '.jpg">';
            document.getElementById("num").innerHTML = 'photo number' + " " + currphoto
        }
        function last() {
            if(currphoto == 1) {
                currphoto = photoTotal
            } else {
                currphoto--
            }
            document.getElementById("gallery").innerHTML = '<img width='+imgWidth+'px src="screenshots/' + currphoto + '.jpg">'
            document.getElementById("num").innerHTML = 'photo number' + " " + currphoto;
        }