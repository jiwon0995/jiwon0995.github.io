const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

const greetings = [
    "Hello",
    "Hi",
    "Good day",
    "Welcome",
    "Howdy",
    "Hey",
    "Yo",
    "What's up",
    "Sup",
    "Hey there",
    "Hi there",
    "Hello there",
    "Hiya",
    "Heya",
]

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greeting.innerText = `${randomGreeting}_${username}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreetings(savedUsername)
}