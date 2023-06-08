let age = parseInt(prompt("Enter your age"));

switch (age) {
    case 18:
        alert('You are an adult, do whatever you want');
        break;
    case 10:
        alert('You have to do your homework');
        break;
    case 30:
        alert('Go to sleep, it is work tomorrow');
        break;
    default:
        alert("I don't know what you can do");
}