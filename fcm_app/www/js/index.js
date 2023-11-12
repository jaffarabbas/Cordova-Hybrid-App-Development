document.addEventListener('deviceready', () => {
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
