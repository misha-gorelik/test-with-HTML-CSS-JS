const addCard = document.querySelector('.btn-add');

const modalWindow = document.querySelector('.modal'),
      modalBackground = document.querySelector('.modal-block'),
      modalMainForm = document.querySelector('.main-form'),
      modalSubmit = document.querySelector('.btn-submit'),
      closeBtn = document.querySelector('.close-modal');

const nameInput = modalWindow.querySelector('.main-form__input'),
      descriptionInput = modalWindow.querySelector('.main-form__text-area'),
      imgInput = modalWindow.querySelector('.main-form__file');

const cardRow = document.querySelector('.card-row');

let img = undefined;
let imgURL = undefined;

// (function () {
// descriptionInput.value = "";
// nameInput.value = "";
// imgInput.value = "";
// }());




// console.log(addCard);
// console.log(modalWindow);
// console.log(modalBackground);
// console.log(modalSubmit);
// console.log(closeBtn);
// console.log(nameInput);
// console.log(descriptionInput);
// console.log(imgInput);
// console.log(cardRow);

addCard.addEventListener('click', function(){
    modalBackground.classList.remove('none');
    
});

modalBackground.addEventListener('click', (e) => {

    const withinBoundaries = e.composedPath().includes(modalMainForm);
 
	if ( ! withinBoundaries ) {
		modalBackground.classList.add('none');
	}
        
});

modalSubmit.addEventListener('click', (e) => {
    e.preventDefault;

    const name = nameInput.value;
    const description = descriptionInput.value;
    img = imgInput.files[0];

    if (img == undefined){
        imgURL = "./img/206853.png";
    } else {
        imgURL = URL.createObjectURL(img);
    }


    const newItem = document.createElement("div");
    newItem.classList.add('card-item');
    newItem.innerHTML = `<div class="card-img">
    <img src="${imgURL}" alt="img">
</div>
<h4 class="card-title">${name}</h4>
<p class="card-text">${description}</p>`
    cardRow.appendChild(newItem);
    modalBackground.classList.add('none');
    
    descriptionInput.value = "";
    nameInput.value = "";
    imgInput.value = "";
    img = undefined;

});

window.addEventListener("keydown", function (event) {
	if (event.code == 'Escape') {
    modalBackground.classList.add('none');
    }
});