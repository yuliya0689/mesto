// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__profession');
// Находим кнопку закрытия формы в DOM
let closeForm = formElement.querySelector('.popup__close');

// Находим popup в DOM
let popup = document.querySelector('.popup');

// Находим кнопку редактирования в DOM
let profileEdit = document.querySelector('.profile__edit');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Значение полей jobInput и nameInput из свойства value
  let name = nameInput.value;
  let job = jobInput.value;

  // Элементы, куда должны быть вставлены значения полей
  let profileName = document.querySelector('.profile__name');
  let profileProfession = document.querySelector('.profile__profession');

  // Вставка новых значений с помощью textContent
  profileName.textContent = name;
  profileProfession.textContent = job;

  //закрываем форму
  popupClose();
}

function popupOpen() {
  //отобразили попап с формой
  popup.classList.add('popup_opened');

  //берем значения name и job из верстки
  let profileName = document.querySelector('.profile__name');
  let profileProfession = document.querySelector('.profile__profession');

  //добавляем значения name и job в форму
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function popupClose() {
  //скрыли попап с формой
  popup.classList.remove('popup_opened');
}

// следим за событием “submit” - кнопка «Сохранить»
formElement.addEventListener('submit', formSubmitHandler);

//следим за событием “click” - «отправка»
closeForm.addEventListener('click', popupClose);
profileEdit.addEventListener('click', popupOpen);

