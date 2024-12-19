const bntDetails = document.querySelector(".buttonDetails");
const cardBack = document.querySelector(".cardBack");
function backCard(){
    cardBack.style.top = "0px";
}
bntDetails.addEventListener('click', backCard);
