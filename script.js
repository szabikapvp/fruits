const fruitSelect = document.getElementById("fruit-select");
const fruitImg = document.getElementById("fruit-img");
const fruitName = document.getElementById("fruit-name");
const text = document.getElementById("text");
const descContainer = document.querySelector(".desc-container");

fruitSelect.innerHTML += fruits.map(obj => `
    <option value="${obj.id}">${obj.name}</option>
`).join("");

const update = () => {

    if (!fruitSelect.value) {
        fruitImg.src = "./img/fruits.webp";
        fruitImg.classList.add("full-rounded");
        descContainer.classList.add("hidden");
        return;
    }   

    const fruit = fruits.find(obj => obj.id == + fruitSelect.value);

    descContainer.classList.remove("hidden");
    fruitImg.classList.remove("full-rounded");
    fruitImg.src = "./img/" + fruit.image;
    fruitName.textContent = fruit.name;
    text.textContent = fruit.descr;
}