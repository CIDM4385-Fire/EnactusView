var win = Ti.UI.createWindow({
	backgroundColor : "black"
});
var emailTextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#FFFFFF',
  top: "25%", 
  hintText:"Email:",
  width: 300, height: 60
});
win.add(emailTextField);
win.open();

var passwordTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#FFFFFF',
	top: "45%",
	hintText:"Password",
	width: 300, height: 60
});
win.add(passwordTextField);
win.open();

function doClick(e){	
  alert("You are logged in");
}
$.index.open();

