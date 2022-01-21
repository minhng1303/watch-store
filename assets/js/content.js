let images = document.querySelectorAll(".preview");
let main = document.querySelector("#main-image");

let index = 0;
images[0].classList.add("active");
images.forEach((image) => {
  console.log(image);
  image.addEventListener("click", (event, i) => {
    index = i;
    images.forEach((image) => image.classList.remove("active"));
    if (index == i) {
      image.classList.add("active");
    }
    main.setAttribute("src", image.getAttribute("src"));
  });
});
