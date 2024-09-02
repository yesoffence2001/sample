document.getElementById('yes-button').addEventListener('click', () => {
    displayResponse('Yes');
});

document.getElementById('no-button').addEventListener('click', () => {
    displayResponse('No');
});

function displayResponse(answer) {
    const responseMessage = document.getElementById('response-message');
    if (answer === 'Yes') {
        responseMessage.textContent = 'Ohh hello madam I want to a 50% shareholder in this relationship. CEO aap raja g ko bana lena';
        responseMessage.style.color = 'green';
    } else if (answer === 'No') {
        responseMessage.textContent = 'Sorry, No is not an option!';
        responseMessage.style.color = 'orange';
    }
}
