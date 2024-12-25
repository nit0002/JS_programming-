const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Get the color from the data-color attribute
        const color = e.target.getAttribute('data-color');

        // Switch case to set the background color
        switch (color) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            default:
                body.style.backgroundColor = 'white';
                break;
        }
    });
});
