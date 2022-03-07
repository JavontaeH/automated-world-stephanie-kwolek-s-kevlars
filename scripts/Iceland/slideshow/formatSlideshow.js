export const formatSlideshow = (imgString) => {
    return `
    <div class="slideshow fade">
        <img src=${imgString} style="width:100%">
    </div>`
}

const blahBlah = (arr) =>{
    let aString = "";
    for(let i = 0; i<arr.length; i++){
        aString += arr[i];
    }
    return aString;
}
