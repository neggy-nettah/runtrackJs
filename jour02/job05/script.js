window.onscroll = function() {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.getElementById('footer').style.backgroundColor = 'hsl(' + scrollPercentage + ', 100%, 50%)';
}
