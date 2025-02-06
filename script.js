document.getElementById('roseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('thankYouMessage').innerText = "Thank you " + name + "! A virtual rose has been sent to " + email + "!";
    } else {
        document.getElementById('thankYouMessage').innerText = "Please fill in all fields.";
    }
});
