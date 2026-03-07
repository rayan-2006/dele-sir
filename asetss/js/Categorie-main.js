document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.getElementById("category-cards");
  fetch("/databis/Categorie.json", { method: "GET" })
  .then(response => {
    return response.json();
  }).then(data => {
    data.forEach(category => {
      const pordoctItem = document.createElement("div");
      const backgroundImg = document.createElement("img");
      const pordoctInformation = document.createElement("div");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      const a = document.createElement("a");
      const button = document.createElement("button");
      const span = document.createElement("span");
      const i = document.createElement("i");
      // add class name list
      pordoctItem.classList.add("pordoct-item");
      pordoctInformation.classList.add("pordoct-information" ,"pordoct-cove");
      button.classList.add("yellow-button");
      i.classList.add("bi","bi-chevron-right");
      // add valiu 
      backgroundImg.src = category.img;
      backgroundImg.alt = category.name;

      h4.innerText = category.name;
      p.innerText = category.discription;
      
      a.href = "#"

      span.innerText = "View More";


      button.append(span , i);
      a.append(button);
      pordoctInformation.append(h4 , p , a);
      pordoctItem.append(backgroundImg , pordoctInformation);
      categoryCards.append(pordoctItem);
    });
  }).catch(err => {
    console.error("Error =>", err);

  });
});