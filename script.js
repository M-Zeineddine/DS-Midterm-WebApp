document.getElementById('greetButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var greeting = "Hello, " + name + "! Welcome to the web app!";
    document.getElementById('greetingText').innerText = greeting;
});
