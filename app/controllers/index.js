$.index.open();

var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var emailTextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: 10, left: 10,
  hintText:"Email:",
  width: 250, height: 60
});

var passwordTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: 15, left: 10,
	hintText:"Password",
	wideth: 250, height: 60
});
win.add(textField);
win.open();