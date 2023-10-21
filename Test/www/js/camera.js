document.getElementById("btnClick").addEventListener("click", takePicture);

function takePicture(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
    });
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.style.display = "block";
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}