popup = document.createElement('div');
popup.className = 'chrome-notification'

img = document.createElement('img');
img.src = 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/119/thumbs-up-sign_1f44d.png'

text = document.createElement('h2');
text.innerHTML = 'Refresh Prevented!'

popup.appendChild(img)
popup.appendChild(text)

document.body.appendChild(popup);

window.onbeforeunload = () => confirm('Confirm refresh');