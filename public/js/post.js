$(document).ready(function() {
const nameInput = $("name");
const birthDayInput = $("birthday");
const deathDayInput = $("deathday");
const quoteInput = $("quote");
const imageUpload = $("image");
const categorySelected = $("category");
let postId 

function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!nameInput.val().trim() || !birthDayInput.val() || !deathDayInput.val() || !quoteInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
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
    $.post("/api/posts", post, function() {
      window.location.href = "/allposts";
    });
  }



})


