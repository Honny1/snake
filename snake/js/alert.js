window.onload = function () {
    var view = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
    view.tryResizeView({ height: 300, width: 680 });
}
function loadNick() {
    var x = document.getElementById("nick").value;
    document.getElementById("demo").innerHTML = x;
    console.log("pressed: " + x);
}
     