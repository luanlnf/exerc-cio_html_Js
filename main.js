
document.getElementById('numeric-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var numA = parseFloat(document.getElementById('tipe-a').value);
    var numB = parseFloat(document.getElementById('tipe-b').value);

    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');

    console.log('Numero A:', numA);
    console.log('Numero B:', numB);

    if (numB > numA) {
        console.log('Success: Numero B é maior que Numero A');
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        console.log('Error: Numero B não é maior que Numero A');
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});