const bntDetails = document.querySelector(".buttonDetails");
const cardBack = document.querySelector(".cardBack");
function backCard(){
    cardBack.classList.add('backStyle');
}
bntDetails.addEventListener('click', backCard);
