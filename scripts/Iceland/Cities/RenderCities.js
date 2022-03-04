import {getCities} from "/scripts/Iceland/cities/cityData.js"
import {formatData} from "/scripts/Iceland/cities/formatCities.js"


export const cityRender = () =>{
    const contentElement = document.querySelector(".data-card-container");
    const cities = getCities();

    let renderCity = `<div class="data-cards">`

    for(const city of cities){
        renderCity += formatData(city)
    }
    renderCity += `</div>`

    contentElement.innerHTML += `${renderCity}`
}