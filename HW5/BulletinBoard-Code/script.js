var type = "in";
var count = 5;

// open Form to Upload a post
function openUpload() {
  closeForm();
  document.getElementById("uploadForm").style.display = "block";
  document.getElementById("delete").disabled = true;
  document.getElementById("add").disabled = true;
  document.getElementById("upload").disabled = true;
  document.getElementById("edit").disabled = true;

}

// function for discard button of Upload Form
function closeUpload() {
  document.getElementById("uploadForm").style.display =  "none";
  document.getElementById("delete").disabled = false;
  document.getElementById("add").disabled = false;
  document.getElementById("upload").disabled = false;
  document.getElementById("edit").disabled = false;
}

// mock uploading a post funciton- only
// posts a bake sale flyer
function upload() {
  let holder = document.createElement("container");
  holder.id = "post" + count;
  let flyer1 = document.createElement("span");
  let flyer = document.createElement("img");
  flyer.src = "flyer.jpg";
  flyer.alt = "Bake Sale";
  flyer.style = "width: 80px; margin: 10px; z-index: 1;";
  flyer1.appendChild(flyer);
  let trash = document.createElement("div");
  trash.innerHTML = "<button class=\"trash\" style=\"text-align:center;\" id=\"" + count + "\" onclick=\"toTrash(this.id)\">Delete</button>";
  holder.appendChild(flyer1);
  holder.appendChild(trash);

  document.getElementById("post-area-" + type).appendChild(holder); 
  
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
  document.getElementById("post-time").style.display = "none";
  document.getElementById("post-start-title").style.display = "none";
  document.getElementById("post-title").value = "";
  document.getElementById("post").value = "";
  if (type == "ev") {
    document.getElementById("post-start").value = "";
    document.getElementById("post-time").value = "";
    document.getElementById("post-start").style.display = "block";
    document.getElementById("post-time").style.display = "block";
  }
  document.getElementById("myForm").style.display = "block";
  document.getElementById("delete").disabled = true;
  document.getElementById("add").disabled = true;
  document.getElementById("upload").disabled = true;
  document.getElementById("edit").disabled = true;
}

// close the add post form
function closeForm() {
  document.getElementById("myForm").style.display =  "none";
  document.getElementById("post-start").style.display = "none";
  document.getElementById("post-time").style.display = "none";
  document.getElementById("delete").disabled = false;
  document.getElementById("add").disabled = false;
  document.getElementById("upload").disabled = false;
  document.getElementById("edit").disabled = false;

}

// create a post from user input
function createPost() {
  let postittitle = document.getElementById("post-title").value
  let postittext = document.getElementById("post").value;
  let postitdate = "";
  let postittime = "";
  if (type == "ev") {
    postitdate = document.getElementById("post-start").value;
    postittime = document.getElementById("post-time").value;
  }

  let card = document.createElement("div");
  card.id = "post" + count;
  card.className = "card cursor-pointer";

  
  if (type == "ev") {
    card.style = "background-color: #ffc0cb; width: 10rem; margin: 10px; z-index: 1;"
  }
  else if (type == "ad") {
    card.style = "background-color: #cbc3e3; width: 10rem; margin: 10px; z-index: 1;"
  }
  else if (type == "ch") {
    card.style = "background-color: #ccff99; width: 10rem; margin: 10px; z-index: 1;"
  }
  else {
    card.style = "background-color: #ffec96; width: 10rem; margin: 10px; z-index: 1;"
  }


  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h5");
  title.innerText = postittitle;
  title.className = "card-title";

  let text = document.createElement("div");
  text.innerText = postittext;
  text.className = "card-text";

  //trash button
  let trash = document.createElement("div");
  trash.innerHTML = "<button class=\"trash\" id=\"" + count + "\" onclick=\"toTrash(this.id)\">Delete</button>";
  
  //edit button
  let edit = document.createElement("div");
  edit.innerHTML = "<button class=\"edit\" id=\"" + count + "\" onclick=\"toEdit(this.id)\">Edit</button>";
  
  cardBody.appendChild(title);

  if (type == "ev" && postitdate != "") {
    let textdate = document.createElement("div");
    textdate.innerText = postitdate;
    textdate.className = "card-subtitle mb-2 text-muted";
    cardBody.appendChild(textdate);
    end = "210000";
    begin_time = "100000";
    if (postittime != "") {
      begin_time = postittime.toString().replace(":","") + "00";
      end = parseInt(begin_time) + 50000;
      end.toString();
    }
    let texttime = document.createElement("div");
    texttime.innerText = postittime;
    texttime.className = "card-subtitle mb-2 text-muted";
    cardBody.appendChild(texttime);
    date = postitdate.toString().replace("-","").replace("-","") + "T" + begin_time + "Z%2F" + postitdate.toString().replace("-","").replace("-","") + "T" + end + "Z";
    
    let calendarLink = document.createElement("p");
    calendarLink.innerHTML = "<a id=\"calLink\" target=\"_blank\" class=\"calL\" href=\"https://www.google.com/calendar/render?action=TEMPLATE&text="+ postittitle +"&details=" + postittext + ".&location=In+your+neighborhood&dates=" + date + "\">Add to Google Calendar</a>";calendarLink.className = "card-text";
    cardBody.appendChild(calendarLink);
  }

  cardBody.appendChild(text);

  if (type == "ev") {
    let tag = document.createElement("h6");
    tag.innerHTML = "<span class=\"badge badge-secondary\">Your Event</span>"
    cardBody.appendChild(tag);
  }

  cardBody.appendChild(trash);
  cardBody.appendChild(edit);

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

//User can edit post
function toEdit(item_id) {
    document.getElementById("editForm").style.display = "block";
    let post = document.getElementById("post" + item_id);

    document.getElementById("edit-title").value = post.getElementsByClassName("card-title").item(0).innerText; 
    document.getElementById("edit-post").value = post.getElementsByClassName("card-text").item(0).innerText; 
    document.getElementById("editButton").onclick = function() {doEdit(item_id)};
}

//Saves the changes of edit
function doEdit(item_id) {
  let post = document.getElementById("post" + item_id);

  post.getElementsByClassName("card-title").item(0).innerText = document.getElementById("edit-title").value; 
  post.getElementsByClassName("card-text").item(0).innerText = document.getElementById("edit-post").value; 

  closeEdit();
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
    
// close the delete form
function closeEdit() {
  document.getElementById("editForm").style.display =  "none";
}

// show to trash buttons
function trashOption() {
  let posts = document.getElementsByClassName("trash");
  let delButton = document.getElementById("delete");
  let change = "none";
  if (delButton.textContent == "Delete one of your Posts") {
    document.getElementById
    delButton.textContent = "Go back to Posting Mode";
    change = "block";
    document.getElementById("add").disabled = true;
    document.getElementById("upload").disabled = true;
    document.getElementById("edit").disabled = true;
    document.getElementById("boardimg").style.filter = "brightness(50%)";
  }
  else {
    delButton.textContent = "Delete one of your Posts";
    document.getElementById("add").disabled = false;
    document.getElementById("upload").disabled = false;
    document.getElementById("edit").disabled = false;
    document.getElementById("boardimg").style.filter = "brightness(100%)";
  }
  for (let i = 0; i < posts.length; i++) {
    posts.item(i).style.display = change;
  }
}

// show the edit buttons
function editOption() {
  let posts = document.getElementsByClassName("edit");
  let editButton = document.getElementById("edit");
  let change = "none";
  if (editButton.textContent == "Edit one of your Posts") {
    editButton.textContent = "Go back to Posting Mode";
    change = "block";
    document.getElementById("add").disabled = true;
    document.getElementById("upload").disabled = true;
    document.getElementById("delete").disabled = true;
    document.getElementById("edit").disabled = false;
    document.getElementById("boardimg").style.filter = "brightness(50%)";
  }
  else {
    editButton.textContent = "Edit one of your Posts";
    document.getElementById("add").disabled = false;
    document.getElementById("upload").disabled = false;
    document.getElementById("delete").disabled = false;
    document.getElementById("edit").disabled = false;
    document.getElementById("boardimg").style.filter = "brightness(100%)";
  }
  for (let i = 0; i < posts.length; i++) {
    posts.item(i).style.display = change;
  }
}

// 'switch' boards
function loadDoc(doc) {
  let t = "Welcome!";
  if (doc == 'ad') {
    t = "Advertising Board";
  }
  if (doc == 'ch') {
    t = "General Board";
  }
  if (doc == 'ev') {
    t = "Events Board";
  }
  document.getElementById("title").innerText = t;
  document.getElementById("post-area-in").style.opacity = 0;
  document.getElementById("post-area-ad").style.opacity = 0;
  document.getElementById("post-area-ch").style.opacity = 0;
  document.getElementById("post-area-ev").style.opacity = 0;
  document.getElementById("post-area-in").style.pointerEvents = "none";
  document.getElementById("post-area-ad").style.pointerEvents = "none";
  document.getElementById("post-area-ch").style.pointerEvents = "none";
  document.getElementById("post-area-ev").style.pointerEvents = "none";
  document.getElementById("post-area-" + doc).style.opacity = 1;
  document.getElementById("post-area-" + doc).style.pointerEvents = "auto";
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
  calendarLink.innerHTML = "<a id=\"calLink\" target=\"_blank\" class=\"calL\" href=\"https://www.google.com/calendar/render?action=TEMPLATE&text=Neighborhood+Event&details=This+is+an+event.&location=In+your+neighborhood&dates=20210412T153400Z%2F20210412T153400Z\">Add to Google Calendar</a>";
  calendarLink.className = "card-text";

  let check = document.createElement("div");
  check.innerHTML = "<button class=\"notinterested\" id=\"deleteForm\" onclick=\"closeFormInterested(" + buttoncount + ")\">Close</button>";
      
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

function info() {
  
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}