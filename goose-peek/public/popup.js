const data = [
    { id: 0, header: "You are goosing the right way!", path: "./geese-moods/1.jpg", desc: "Learn new concepts and do your tasks. Don't let them fly away!"},
    { id: 1, header: "I got just got goosebumps...", path: "./geese-moods/2.jpg", desc: "Scared me there for a sec! Though you were going off track..."},
    { id: 2, header: "Don't be a silly goose.", path: "./geese-moods/3.jpg", desc: "Stay on track. If you don't, you will see another side of me."},
    { id: 3, header: "Stop goosing around... I will honk. ", path: "./geese-moods/4.jpg", desc: "HONK! What are you doing here? Aren't you supposed to be working?"},
    { id: 4, header: "Goose on the loose! And it's coming for you.", path: "./geese-moods/5.jpg", desc: "You need to be disciplined. I shall show you true power"},
];

const urlParams = new URLSearchParams(window.location.search);
var count = decodeURIComponent(urlParams.get('data'));

const imgElement = document.querySelector('#geese');
imgElement.src = data[count].path;

const headerElement = document.querySelector('#headerText');
headerElement.textContent = data[count].header;

const descElement = document.querySelector('#desc');
descElement.textContent = data[count].desc;
