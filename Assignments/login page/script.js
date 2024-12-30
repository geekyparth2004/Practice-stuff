function showMessage(n) {
    var message = document.getElementById('message');
    switch(n) {
        case 1:
            message.textContent = "Welcome to the bank";
            break;
        case 2:
            message.textContent = "Welcome again to the bank";
            break;
        case 3:
            message.textContent = "Hey team member please check your work update";
            break;
        default:
            message.textContent = "Invalid option";
    }
}
