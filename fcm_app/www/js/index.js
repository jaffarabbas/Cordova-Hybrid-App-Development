document.addEventListener('deviceready', () => {
    cordova.plugins.firebase.analytics.logEvent("my_event", {param1: "value1"});
    firebaseSetup();
});
  
function firebaseSetup() {
    FirebasePlugin.onMessageReceived(message => {
      console.log(message);
      localStorage.setItem('message', JSON.stringify(message));
      let msg = JSON.parse(localStorage.getItem('message'));
      console.log(msg);
      alert(msg.title+''+msg.body);
    }, error => {
      console.error(error);
    });
}
