const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupExitButton = popup.querySelector('.popup__exit-button');

const popupToggle = function() {
  popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', popupToggle);
popupExitButton.addEventListener('click', popupToggle);

const formElement = document.querySelector('.popup__form');

const popupFieldName = popup.querySelector('.popup__field_name');
const popupFieldDescription = popup.querySelector('.popup__field_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  popupToggle();
}

// formElement.addEventListener('submit', formSubmitHandler);

// let profileNameFontSize = profileName.style.fontSize;

// if (profileName.length > 15) {
//   profileName.style.fontSize = profileNameFontSize - 10;
// }


