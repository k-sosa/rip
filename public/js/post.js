$(document).ready(function() {
const nameInput = $("#exampleTile");
const birthDayInput = $("#birthdate");
const deathDayInput = $("#deathdate");
const quoteInput = $("#exampleDescription");
const imageUpload = $("#myFile");
const categorySelected = $("#form-category");
let postId 

$("#uploadForm").on("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    alert("you have uploaded")
    // Wont submit the post if we are missing a name, birthday, death day or quote
    if (!nameInput.val().trim() || !birthDayInput.val() || !deathDayInput.val() || !quoteInput.val().trim()) {
      return;
    }
    
    const newPost = {
      name: nameInput.val().trim(),
      birthDay: bodyInput.val().trim(),
      deathDay: deathDayInput.val().trim(),
      quote: quoteInput.val().trim(),
      image: imageUpload,
      category: categorySelected

    };

      submitPost(newPost);
    
  }

  function submitPost(post) {
    $.post("/api/posts", post, function(object1) {
      window.location.href = "/allposts";
    });
  }



})


