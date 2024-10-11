function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Invalid Task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  // creating the elements
  const listItem = document.createElement("div");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  label.textContent = taskText;
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    label.classList.toggle("completed");
  };

  // appending the elements
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  taskList.appendChild(listItem);


  taskInput.value = "";
}

// Time
function updateTime() {
  const time = new Date();
  document.getElementById('time').textContent = time.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// Greeting
function setGreeting() {
  let name = document.querySelector("#name")
  const hours = new Date().getHours();
  let header = document.querySelector("#greeting");
  if (header < 12) {
    header = 'Good Morning';
  } else if (hours < 18) {
    header = 'Good Afternoon';
  } else {
    header = 'Good Evening';
  }
  greeting.textContent = `${header}, Master ${name.value}.`;
  name.style.display = "none";
  document.getElementById("editButton").style.display = "none"
}

document.getElementById("editButton").addEventListener("click", setGreeting);

// Focus
function addFocus() {
  const focus = document.getElementById('focusInput').value;
  document.getElementById('focusDisplay').textContent = `Today's Focus: ${focus}`;
}

// Quotes
const quotes = [
  "We were on a break!",
  "Just so you know, it's not that common, it doesn't happen to every guy, and it is a big deal!",
  "Smelly cat, smel-ly cat, what are they feeding you? Smelly cat, smel-ly cat, it's not your fault.",
  "He's a transponster!",
  "What's not to like? Custard? Good. Jam? Good. Meat? Good.",
  "A two, four, six. Two, four, six. Four. Two. Two. Four, seven! Five, seven! Six, seven! Seven! Seven! Seven! Seven! Seven! Seven! Seven! Seven! Seven!",
  "If he doesn't like you this is all a moo point. ... Yeah, it's like a cow's opinion. It just doesn't matter. It's moo.",
  "Gum would be perfection.",
  "My sister's gonna have my baby!",
  "Here come the meat sweats.",
  "Look at me! I'm Chandler! Could I be wearing any more clothes?!",
  "Pivot! Pivot! Pivot! Pivot. Pivot. Pivot.",
  "She's your lobster",
  "Oh. My. God.",
  "It's what the Japanese call 'unagi'.",
  "That's right, I stepped up! She's my friend and she needed help. If I had to, I'd pee on any one of you!",
  "But they don't know that we know they know we know!" ,
  "I'm being transferred to Yemen." 
];

function showRandomQuote() {
  const randomQuotes = Math.floor(Math.random() * quotes.length);
  document.getElementById('randomQuote').textContent = `" ${quotes[randomQuotes]}"`;
}

function addQuote() {
  const newQuote = document.getElementById('newQuote').value;
  if (newQuote) {
    quotes.push(newQuote);
    alert("New quote added!");
    document.getElementById('newQuote').value = '';
    showRandomQuote();
  }
}

showRandomQuote();

document.getElementById("addButton").addEventListener('click', addTask);

const backgrounds = [
  "BG/eberhard.jpg",
  "BG/lonela.jpg",
  "BG/min.jpg",
  "BG/mo.jpg",
  "BG/roberto.jpg",
  "BG/ron.jpg",
  "BG/steve.jpg",
  "BG/yavuz.jpg",
  "BG/yusuf.jpg",
  "BG/yusuf1.jpg",
  "BG/mahima.jpg",
  "BG/ilham.jpg",
  "BG/pixabay2.jpg",
  "BG/roberto1.jpg",
  "BG/tim.jpg",
  "BG/emre.jpg",
  "BG/khari.jpg",
  "BG/egor.jpg",
  "BG/anna.jpg",
  "BG/pixabay1.jpg",
  "BG/etha.jpg",
  "BG/pixabay.jpg"
];

// Random Background
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const randomBackground = backgrounds[randomIndex];
  document.body.style.backgroundImage = `url(${randomBackground})`;
}

setRandomBackground();