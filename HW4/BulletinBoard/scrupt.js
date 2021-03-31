var type = "in";
var count = 4;

// open Form to Upload a post
function openUpload() {
  closeForm();
  document.getElementById("upload-title").value = "";
  document.getElementById("uploadForm").style.display = "block";
  document.getElementById("delete").disabled = true;
  document.getElementById("add").disabled = true;
  document.getElementById("upload").disabled = true;
}

// function for discard button of Upload Form
function closeUpload() {
  document.getElementById("uploadForm").style.display =  "none";
  document.getElementById("delete").disabled = false;
  document.getElementById("add").disabled = false;
  document.getElementById("upload").disabled = false;
}

// mock uploading a post funciton- only
// posts a bake sale flyer
function upload() {
  let holder = document.createElement("div");
  holder.id = "post" + count;
  let flyer1 = document.createElement("div");
  let flyer = document.createElement("img");
  flyer.src = "flyer.jpg";
  flyer.alt = "Bake Sale";
  flyer.style = "width: 80px;";
  flyer1.appendChild(flyer);
  let trash = document.createElement("div");
  trash.innerHTML = "<button class=\"trash\" style=\"text-align:center;\" id=\"" + count + "\" onclick=\"toTrash(this.id)\">Delete</button>";
  holder.appendChild(flyer1);
  holder.appendChild(trash);

  document.getElementById("post-area-" + type).appendChild(holder);
  let toppixel = 100;
  var topstr = toppixel.toString();
  document.getElementById("post-area-" + type).style.position = "absolute";
  document.getElementById("post-area-" + type).style.top = "20%";
  document.getElementById("post-area-" + type).style.left = "10%";
  document.getElementById("post-area-" + type).style.right = "30%";
  closeUpload();
  count += 1;
}

// open the form to add a post
function openForm() {
  closeUpload();
  document.getElementById("post-start").style.display = "none";
  document.getElementById("post-start-title").style.display = "none";
  document.getElementById("post-title").value = "";
  document.getElementById("post").value = "";
  if (type == "ev") {
    document.getElementById("post-start").value = "";
    document.getElementById("post-start").style.display = "block";
    document.getElementById("post-start-title").style.display = "block";
  }
  document.getElementById("myForm").style.display = "block";
  document.getElementById("delete").disabled = true;
  document.getElementById("add").disabled = true;
  document.getElementById("upload").disabled = true;
}

// close the add post form
function closeForm() {
  document.getElementById("myForm").style.display =  "none";
  document.getElementById("post-start").style.display = "none";
  document.getElementById("post-start-title").style.display = "none";
  document.getElementById("delete").disabled = false;
  document.getElementById("add").disabled = false;
  document.getElementById("upload").disabled = false;
}

// create a post from user input
function createPost() {
  let postittitle = document.getElementById("post-title").value
  let postittext = document.getElementById("post").value;
  let postitdat = "";
  if (type == "ev") {
    postitdate = document.getElementById("post-start").value;
  }

  let card = document.createElement("div");
  card.id = "post" + count;
  card.className = "card cursor-pointer";

  ///Random color
  card.style = "background-color: #ffec96; width: 10rem; margin: 10px;"


  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h5");
  title.innerText = postittitle;
  title.className = "card-title";

  let text = document.createElement("div");
  text.innerText = postittext;
  text.className = "card-text";

  let trash = document.createElement("div");
  trash.innerHTML = "<button class=\"trash\" id=\"" + count + "\" onclick=\"toTrash(this.id)\">Delete</button>";

  cardBody.appendChild(title);

  if (type == "ev") {
    let textdate = document.createElement("div");
    textdate.innerText = postitdate;
    textdate.className = "card-subtitle mb-2 text-muted";
    cardBody.appendChild(textdate);
  }

  cardBody.appendChild(text);

  if (type == "ev") {
    let check = document.createElement("div");
    check.innerHTML = "<button class=\"interested\" id=\"interested-button" + count + "\" onclick=\"interested(" + count + ")\">Interested?</button>"
    cardBody.appendChild(check);
  }

  cardBody.appendChild(trash);
  card.appendChild(cardBody);
  document.getElementById("post-area-" + type).appendChild(card);
  let toppixel = 100;
  var topstr = toppixel.toString();
  document.getElementById("post-area-" + type).style.position = "absolute";
  document.getElementById("post-area-" + type).style.top = "20%";
  document.getElementById("post-area-" + type).style.left = "10%";
  document.getElementById("post-area-" + type).style.right = "30%";
  closeForm();

  count += 1;
}

// User controls to delete a post
function toTrash(item_id) {        
  document.getElementById("deleteForm").style.display = "block";
  document.getElementById("deleteButton").onclick = function() {doDelete(item_id)};
}

// functionally delete a post
function doDelete(item_id) {
  document.getElementById("post" + item_id).style.display =  "none";
  closeDelete();
  document.getElementById(item_id).classList.remove("trash");
}

// close the delete form
function closeDelete() {
  document.getElementById("deleteForm").style.display =  "none";
}
    
// show to trash buttons
function trashOption() {
  let posts = document.getElementsByClassName("trash");
  let delButton = document.getElementById("delete");
  let change = "none";
  if (delButton.textContent == "Delete one of your Posts") {
    delButton.textContent = "Go back to Posting Mode";
    change = "block";
    document.getElementById("add").disabled = true;
    document.getElementById("upload").disabled = true;
  }
  else {
    delButton.textContent = "Delete one of your Posts";
    document.getElementById("add").disabled = false;
    document.getElementById("upload").disabled = false;
  }
  for (let i = 0; i < posts.length; i++) {
    posts.item(i).style.display = change;
  }
}

// 'switch' boards
function loadDoc(doc) {
  let t = "Welcome Board";
  switch (doc)
  {
  case "ad":
    t = "Advertising Board";
    
    break;
  case "ch": 
    t = "Casual Chat";
    break;
  case "ev":
    t = "Events Board";
    break;
   default: 
  }
  document.getElementById("title").innerText = t;
  document.getElementById("post-area-in").style.opacity = 0;
  document.getElementById("post-area-ad").style.opacity = 0;
  document.getElementById("post-area-ch").style.opacity = 0;
  document.getElementById("post-area-ev").style.opacity = 0;
  document.getElementById("post-area-" + doc).style.opacity = 1;
  type = doc;
  document.getElementById("myForm").style.display =  "none";
  document.getElementById("post-start").style.display = "none";
  document.getElementById("post-start-title").style.display = "none";
  document.getElementById("uploadForm").style.display =  "none";
  document.getElementById("delete").disabled = false;
  document.getElementById("add").disabled = false;
  document.getElementById("upload").disabled = false;
  let delButton = document.getElementById("delete");
  if (delButton.textContent != "Delete one of your Posts") {
    trashOption();
  }
}

function interested(buttoncount) {
  let card = document.createElement("div");
  card.id = "post-interested" + buttoncount;
  card.className = "card cursor-pointer";
  card.style = "background-color: #FFB6C1; width: 10rem;";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h7");
  title.innerText = "Calendar Invite:";
  title.className = "card-title";

  let calendarLink = document.createElement("p");
  calendarLink.innerHTML = "<a id=\"calLink\" href=\"https://www.google.com/calendar/about/\">Add to Google Calendar</a>";
  calendarLink.className = "card-text";

  let check = document.createElement("div");
  check.innerHTML = "<button class=\"notinterested\" id=\"deleteForm\" onclick=\"closeFormInterested(" + buttoncount + ")\">Cancel</button>";
      
  document.getElementById("interested-button" + buttoncount + "").disabled = true;

  cardBody.appendChild(title);
  cardBody.appendChild(calendarLink);
  cardBody.appendChild(check);
  card.appendChild(cardBody);
  document.getElementById("post-area-" + type).appendChild(card);
}

function closeFormInterested(count) {
  document.getElementById("post-area-" + type).removeChild(document.getElementById("post-interested" + count + ""));
  document.getElementById("interested-button" + count + "").disabled = false;
}