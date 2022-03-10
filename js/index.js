"use strict";

// url =>  https://ehbchatapp.herokuapp.com/

const chat = {
    author: "Alexander",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
        fetch("https://ehbchatapp.herokuapp.com/message")
    },
    fetchMessages() {
        fetch("https://ehbchatapp.herokuapp.com/messages") //halen de API op via de url
            .then(response => {
                console.log("response"); //zet response van api om in json die automatish parsed
                return response.json();
            })
            .then(data => {
                data.forEach(message => { //voor elke element in de array voort hij de fucntie renderMessage uit
                    this.renderMessage(message);
                });
                console.log(data);
            });
    },

    renderMessage(message) {
        const htmlString = `<div class="messageItem">
         <div class="header">
        <span class="author">${message.author}</span>
        <span class="time">${message.created_at}</span>
        </div>
        <p>
        ${message.message}
        </p>
    </div>
        </div>`;
        document.getElementById("messageContainer").innerHTML += htmlString;
    }
};

chat.init()

/* <div id="messageContainer">
<div class="messageItem">
  <div class="header">
      <span class="author">TEST</span>
      <span class="time">00:00</span>
  </div>
  <p>
      Hi there, this is the example
  </p>
</div> */