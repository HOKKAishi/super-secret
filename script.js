const messages = [
    'Are you sure?',
    'Are you really sure?',
    'Like 100% positive...',
    'Uhhhh ermmm like really really sure?',
    'Please I will be really sad...',
    'I will cry if you say no...',
    'I will be really really sad if you say no...',
    'I\'ll go eat a rock I guess.',
    'Haha... so hey...'
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Update text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Grow the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
    yesButton.style.padding = `${parseFloat(window.getComputedStyle(yesButton).padding) * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}