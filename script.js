// Plusieurs occurence dans index.html
const linkItems = document.querySelectorAll(".link-item");
console.log(linkItems);

//Pour chaque occurence add a Event click
linkItems.forEach((linkItem, index) => {
  //Event + callback
  linkItem.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    linkItem.classList.add("active");

    const indicator = document.querySelector(".indicator");

    //
    indicator.style.left = `${index * 95 + 48}px`;
  });
});
