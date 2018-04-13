window.onload = function() {
    var tds = document.getElementsByTagName('td');

    addEventListener("keypress", function (event) {
        for (var i = 0; i < tds.length; i++){
            var text = tds[i].innerText,
                str = String.fromCharCode(event.which);
            if ( str === text || str === text.toUpperCase() )
                tds[i].style.backgroundColor = '#a2cf8e';
        }});	

    addEventListener("keyup", function (event) {
        for (var i = 0; i < tds.length; i++){
            tds[i].style.backgroundColor = '';
        }});
};