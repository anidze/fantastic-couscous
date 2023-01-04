let number =document.querySelector(".dollars");
let inpValue=document.querySelector("#priceRange");

inpValue.addEventListener('input', getInpValue)
function getInpValue(e){
    number.textContent=inpValue.value;
   
    }

    