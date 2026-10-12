let form = document.querySelector("#form");
let ad = document.querySelector("#ad");
let number = document.querySelector("#number");
let city = document.querySelector("#city");
let description = document.querySelector("#description");
let btn = document.querySelector("#button");
let div = document.querySelector("div"); 
div.classList.add("ads-container"); 
let elan = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (ad.value == "" || number.value == "" || city.value == "" || description.value == "") {
        alert("Bütün xanaları doldurun!");
        return;
    }
    
    let newElan = {
        id: Date.now(),
        ad: ad.value,
        number: number.value,
        city: city.value,
        description: description.value
    };
    
    elan.push(newElan);
    
    ad.value = "";
    number.value = "";
    city.value = "";
    description.value = "";
    
    alert("Elan əlavə olundu!");
    displayAds();
});

function displayAds() {
  
    div.innerHTML = ""; 
    elan.forEach(x => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${x.ad}</h2>
            <p><strong>Qiymət:</strong> ${x.number}</p>
            <p><strong>Şəhər:</strong> ${x.city}</p>
            <p>${x.description}</p>
            <button onclick="deleteElan(${x.id})">Sil</button>
        `;

        div.appendChild(card);
    });
}

function deleteElan(id) {
    elan = elan.filter(x => x.id !== id);
    displayAds();
}