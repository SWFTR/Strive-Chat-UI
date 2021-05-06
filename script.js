let parent = document.querySelector('#chatbox');
let input = document.querySelector('input');
let button = document.querySelector("button");
let switchUser = true;
const date = new Date();

let leftMessage = ` <div id='left-message'>
                        <div id='img-cont-left'>
                            <img src="./assets/P.jpeg"/>
                        </div>
                        <div id='message-box-left'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <span id="time">9:41 AM</span>   
                        </div>
                    </div>`;

                    

function createMessage() {

    if (input.value) {
        const markup = `<div id='${switchUser ? 'left-message' : 'right-message'}'>
                            <div id='${switchUser ? 'img-cont-left' : 'img-cont-right'}'>
                                <img src="${switchUser ? './assets/P.jpeg' : './assets/M.jpeg'}"/>
                            </div>
                            <div id='${switchUser ? 'message-box-left' : 'message-box-right'}'>
                                <p>${input.value}</p>
                                <span id="time">${new Intl.DateTimeFormat("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                }).format(date)}</span>   
                            </div>
                        </div>`;
    
        parent.innerHTML += markup;
        input.value='';
        switchUser = !switchUser;
    }
    
}


input.addEventListener("keydown", function(event) {

if (event.keyCode === 13) {
  event.preventDefault();
  button.click();
}
});
