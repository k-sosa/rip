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
        if (passOne === passTwo) {
            $.post("/api/users", userData)
        }
        else {
            alert("Passwords do not match! Try again!")
        }
    };
});