const params = new URLSearchParams(window.location.search);
let me  = params.get('name');
const chatHeader = document.getElementById('chat-header');
const chatBox = document.getElementById("chat-box");
if (me) {
    chatHeader.textContent = `Chat com ${me}`;
}


const btnSend = document.getElementById("btn-send");
const inputMessage = document.getElementById("inpt-msg");

btnSend.addEventListener("click", function () {
   
    chatBox.innerHTML = chatBox.innerHTML + "<div class='chat-message user'>"+inputMessage.value+"</div>"; 
    inputMessage.value = ""; 

    sendMessage(inputMessage.value);
});

function sendMessage(message) {
    const arr = { user: me, msg: message };
    ws.send(JSON.stringify(arr));
}
