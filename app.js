const cat = document.getElementById("catDiv");
const dog = document.getElementById("dogDiv");
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const catImg = document.getElementById("catImg");
const dogImg = document.getElementById("dogImg");
const infoBtn = document.getElementById("infoBtn");
const infoBtn2 = document.getElementById("infoBtn2");

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomImage);
// dogBtn.addEventListener("click", getImgInfo);

function getRandomCat() {
  fetch("https://picsum.photos/200")
    .then((res) => {
      console.log(res);
      return res.blob();
    })
    .then((data) => {
      console.log(data);
      catImg.src = URL.createObjectURL(data);
    })
    .catch((error) => console.log(error));
}

getRandomImage()
  .then((response) => {
    console.log("yayy");
  })
  .catch((error) => console.log(error));

async function getRandomImage() {
  const response = await fetch("https://picsum.photos/200");
  console.log("response", response);
  const blob = await response.blob();
  dogImg.src = URL.createObjectURL(blob);
  console.log(dogImg.src);
}

let id = Math.floor(Math.random() * 101);

const info_url = `https://picsum.photos//id/${id}/info`;
// for (let i = 0; i < 10; i++) {
//   id++;
//   console.log(info_url);
// }

console.log(info_url);

async function getInfo() {
  const response = await fetch(info_url);
  const data = await response.json();
  console.log("nuoroda", data);
  console.log();
}

getInfo();
