const bntDetails = document.querySelector(".buttonDetails");
const cardBack = document.querySelector(".cardBack");
const cardCloseCardBack = document.querySelector(".btnCloseCardBack")

function bntsOpenClose(){
    cardBack.classList.toggle('BackActive')
}
var btnOpen = bntDetails.target
bntDetails.addEventListener('click', bntsOpenClose)
cardCloseCardBack.addEventListener('click', bntsOpenClose)