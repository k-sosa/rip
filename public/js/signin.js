$(document).ready(function () {
    $(document).on("submit", "#user-form",
        handleUserFormSubmit);

    function handleUserFormSubmit(event) {
        event.preventDefault();
        if (!userInput.val().trim().trim()) {
            return;
        }
        const loginForm = $("form.login");
        const userInput = $("#user-name");
        const passwordInput = $("#password-input");

        // When the form is submitted, we validate there's an email and password entered
        loginForm.on("submit", function (event) {
            event.preventDefault();
            const userData = {
                username: userInput.val().trim(),
                password: passwordInput.val().trim()
            };

            if (!userData.email || !userData.password) {
                return;
            }

            // If we have an email and password we run the loginUser function and clear the form
            loginUser(userData.username, userData.password);
            userInput.val("");
            passwordInput.val("");
        });

        // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
        function loginUser(username, password) {
            $.post("/api/login", {
                username: username,
                password: password
            })
                .then(function () {
                    window.location.replace("/allposts");
                    // If there's an error, log the error
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
});