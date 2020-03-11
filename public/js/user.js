$(document).ready(function() {
    const userInput = $("#user-name");
    const passwordInput = $("#password-input");
    const passwordVerify = $("#password-verify");

    $(document).on("submit", "#user-form", 
    handleUserFormSubmit);

    function handleUserFormSubmit(event) {
        event.preventDefault();
        if (!userInput.val().trim().trim()) {
            return;
        }
        insertUser({
            username: userInput
                .val()
                .trim(),
            password: passwordInput
                .val()
                .trim()
        });
    }


    function insertUser(userData) {
        const passOne = passwordInput.val().trim();
        const passTwo = passwordVerify.val().trim();
        const UserName = userInput.val().trim();
        const letters = /^[0-9a-zA-Z]+$/;
        if (passOne !== passTwo) {
            alert("Passwords do not match! Try again!")
        }
        else if (passOne.length >= 8 && passOne.length <= 20) {
            alert("Password must be between 8 and 20 characters in length!")
        }
        else if (!passOne.val().match(letters)) {
            alert("Password can only be letters and numbers!")
        }
        else if (!UserName.val().match(letters)) {
            alert("Username can only be letters and numbers!")
        }
        else {
            $.post("/api/users", userData)
        }
    };
});