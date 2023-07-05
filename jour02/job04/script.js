window.onload = function() {
    let keylogger = document.getElementById('keylogger');

    window.addEventListener('keypress', function(e) {
        let key = String.fromCharCode(e.keyCode);
        if(e.target === keylogger) {
            key = key + key;
        }
        keylogger.value += key;
    });
}
