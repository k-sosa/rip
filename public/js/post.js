

$(document).ready(function () {
  const nameInput = $("#exampleTile");
  const birthDayInput = $("#birthdate");
  const deathDayInput = $("#deathdate");
  const quoteInput = $("#exampleDescription");
  const imageUpload = $("#myFile");
  const categorySelected = $("#form-category");
  const tableBody = $("tbody");
  const deathContainer = $(".card-body");

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
    $.post("/api/posts", post, function (object1) {
      window.location.href = "/allposts";

      function createPostRow(postData) {
        const newTr = $("<tr>");
        newTr.data("author", postData);
        newTr.append("<td>" + postData.name + "</td>");
        if (postData.Posts) {
          newTr.append("<td> " + authorData.Posts.length + "</td>");
        } else {
          newTr.append("<td>0</td>");
        }
        newTr.append("<td>" + postData.id + "Go to Posts</td>");
        newTr.append("<td>" + postData.id + "Create a Post</td>");

        return newTr;
      }
      getUserPosts();

      function getUserPosts() {
        $.get("/api/allposts", function (data) {
          const rowsToAdd = [];
          for (let i = 0; i < data.length; i++) {
            rowsToAdd.push(createPostRow(data[i]));
          }
          renderPostList(rowsToAdd);
          nameInput.val("");
          birthDayInput.val("")
          deathDayInput.val("")
          quoteInput.val("")
        });
      }



      function renderPostList(rows) {
        tableBody.children().not(":last").remove();
        deathContainer.children(".alert").remove();
        if (rows.length) {
          console.log(rows);
          tableBody.prepend(rows);
        }
        else {
          renderEmpty();
        }
      }

    });
  }



})


