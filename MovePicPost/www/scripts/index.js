// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    //<script language="JavaScript">


    /*
    Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
    Over 400+ free JavaScripts here!
    Keep this notice intact please
    */


    //-->
    //</script>


  

    // onError Callback receives a PositionError object
    //
   

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
      
    }
    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
   

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }

})();


function randomImg() {
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    var imgName = "img_" + randomNumber + ".png";
    document.getElementById("imageid").src = "images" + "/" + imgName;
}