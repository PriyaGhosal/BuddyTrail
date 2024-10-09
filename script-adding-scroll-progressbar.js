

window.onscroll = function () {
    updateProgressBar();
};


function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = scrollPercent + "%";
}

