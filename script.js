//Q1

let posts = document.querySelectorAll(".post");

posts.forEach((post) => {
  post.style.fontSize = "18px";
});

let menu = document.querySelector(".active");
menu.style.borderBottom = "dashed white";

let parent = document.querySelector(".post.featured").parentElement;
parent.style.backgroundColor = " yellow";

let FeaturedPostHeading = document.querySelector(".post.featured > h2");
FeaturedPostHeading.textContent = FeaturedPostHeading.textContent.toUpperCase();
FeaturedPostHeading.style.backgroundColor = "red";

//Q2

function addClassToElements(selector, classnametoadd) {
  let elementNodeList = document.querySelectorAll(selector);
  console.log(elementNodeList);
  let counter = 0;

  for (let element of elementNodeList) {
    element.classList.add(classnametoadd);
  }
}
