window.PHONE_SCREEN_WIDTH = 480;
window.PAD_SCREEN_WIDTH = 960;
window.MIDDLE_PC_SCREEN_WIDTH = 1366;

window.onbeforeunload = function() {
	io.socket.delete('/session');
    return null;
};

React.render(<MainForm />, document.getElementById('main'));