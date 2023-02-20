const socket = io()

const messageInput = document.querySelector('#messages')
const sendButton = document.querySelector('#input')
const sendContainer = document.querySelector('#form')


sendContainer.addEventListener('submit', () => {
    e.preventDefault()
    if(sendButton.value){
socket.emit('sendMessage', sendButton.value)
console.log(sendButton)
sendButton.value = ''
    } else {
        console.log('Couldnt emit')
    }
})

socket.on('chatMessage', (msg) => {
    const item = document.createElement('li')

    item.textContent = msg
    
    // messageNode.innerText = message
    sendContainer.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})