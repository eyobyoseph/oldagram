import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  databaseURL: "https://ground-play-6c584-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const likeInDatabase = ref(database, "likes");
const likesInDatabase = ref(database, "number of likes");
const likingInDatabase = ref(database, "counting");


const likeIconEl = document.getElementById("like-icon");
const likeCountEl = document.getElementById("like-count");
const likeIconsEl = document.getElementById("like-icons");
const likeCountsEl = document.getElementById("like-counts");
const likeIconEls = document.getElementById("like-icon-el");
const likeCountingEl = document.getElementById("like-counting");
const postImageEl = document.getElementById("pic-1");
const postImageEl2 = document.getElementById("pic-2");
const postImageEl3 = document.getElementById("pic-3");





let likeCount = 0;
let likeCounts = 0;
let likeCounting = 0;

likeIconEl.addEventListener("click", function() {
  likeCount++;
  likeCountEl.textContent = likeCount + "likes";
  push(likeInDatabase, likeCount);
});

likeIconsEl.addEventListener("click", function() {
  likeCounts++;
  likeCountsEl.textContent = likeCounts + "likes";
  push(likesInDatabase, likeCounts);
});

likeIconEls.addEventListener("click", function() {
  likeCounting++;
  likeCountingEl.textContent = likeCounting + "likes";
  push(likingInDatabase, likeCounting);
});

postImageEl.addEventListener("click", function() {
  likeCount++;
  likeCountEl.textContent = likeCount + "likes"
});

postImageEl2.addEventListener("click", function() {
  likeCounts++;
  likeCountsEl.textContent = likeCounts +  "likes";
});

postImageEl3.addEventListener("click", function() {
  likeCounting++;
  likeCountingEl.textContent = likeCounting + "likes";
});