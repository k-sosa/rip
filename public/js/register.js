

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

    // const unique = function() {
        

   
    //         $.get("/api/users", function(req, res) {
    //             db.User.findOne({
    //               where: {
    //                   username: username
    //               }
    //             }).then(function() {
    //               return true;
    //             });
    //           });
            
    //     };

    //     unique();

    function insertUser(username, password) {
        const passOne = passwordInput.val().trim();
        const passTwo = passwordVerify.val().trim();
        const userName = userInput.val().trim();
        const letters = /^[0-9a-zA-Z]+$/;
        
        if (passOne !== passTwo) {
            alert("Passwords do not match! Try again!");
            return;
        }
        else if (passOne.length < 8 || passOne.length > 20) {
            alert("Password must be between 8 and 20 characters in length!");
            return;
        }
        else if (!passOne.match(letters)) {
            alert("Password can only be letters and numbers!");
            return;
        }
        else if (!userName.match(letters)) {
            alert("Username can only be letters and numbers!");
            return;
        }
        // else if (unique) {
        //     alert("Username already taken!");
        // }
        else {
            $.post("/api/register", username, password);
            const redirect = function() {
                window.location.replace("/allposts");
            }
            redirect();
            const saveUser = function() {
                localStorage.setItem("username", userName);
                
            }
            const localUser = localStorage.getItem("username");
            saveUser();
            console.log(localUser);
        }
        
    };
});