import '../index.css';
import React from 'react';
import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';
import {PopupWithForm} from './PopupWithForm.js';
import {ImagePopup} from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, checkIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, checkIsEditAvatarPopupOpen] = React.useState(false); 
  const [isAddPlacePopupOpen, checkIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, checkIsSelectedCard] = React.useState(false);
  const [gettingCard, checkGetCard] = React.useState({name: '', link: ''});


  function handleEditProfileClick () {
    checkIsEditProfilePopupOpen(true)
  } 
  function handleEditAvatarClick() { 
    checkIsEditAvatarPopupOpen(true)
  }
  function handleAddPlaceClick() {
    checkIsAddPlacePopupOpen(true)
  }
  function handleCardClick(data) {
    checkIsSelectedCard(true);
    checkGetCard({name: data.name, link: data.link});
  }

  function closeAllPopups() {
    checkIsEditProfilePopupOpen(false);
    checkIsEditAvatarPopupOpen(false);
    checkIsAddPlacePopupOpen(false);
    checkIsSelectedCard(false)
  }

   return (
    <div>        
      <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Какие места можно посмотреть в России: красивые места страны, в которой мы живем." />
        <meta name="keywords" content="Россия, путешествия, города" />
        <title>Mesto</title>
        <link href="main.css" rel="stylesheet" ></link>      
      </head>
      <body>
        
        <div className="page">           
          < Header />
          < Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
          < Footer />            
        </div>  

        < PopupWithForm title="Редактировать профиль" name="" children=
          {<>
            <fieldset className="popup__fieldset">
              <input type="text" className="popup__name-field" id="Name" name="nameInput" placeholder="Имя" minlength="2" maxlength="40" required />
              <span id="Name-error" className="popup__name-field-error"></span>
              <input type="text" className="popup__name-field" id="About" name="jobInput" placeholder="О себе" minlength="2" maxlength="200" required />
              <span id="About-error" className="popup__name-field-error"></span>
            </fieldset>
          </>}
          text={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />            

        < PopupWithForm title="Обновить аватар" name="avatar-" children=
          {<>
            <fieldset className="popup__fieldset">
              <input type="url" className="popup__name-field" id="linkAva" name="linkAva" placeholder="Ссылка на аватар" required />
              <span id="linkAva-error" className="popup__name-field-error"></span>
            </fieldset>
          </>}
          text={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        < PopupWithForm title="Новое место" name="add-" children=
          {<>
            <fieldset className="popup__fieldset">
              <input type="text" className="popup__name-field" id="namePic" name="namePic" placeholder="Название" minlength="1" maxlength="30" required />
              <span id="namePic-error" className="popup__name-field-error"></span>
              <input type="url" className="popup__name-field" id="link" name="linkPic" placeholder="Ссылка на картинку" required />
              <span id="link-error" className="popup__name-field-error"></span>
            </fieldset>
          </>}
          text={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        < PopupWithForm title="Вы уверены?" name="delete-" text={"Да"}/>
        < ImagePopup name="pic-" isOpen={selectedCard} onClose={closeAllPopups} card={gettingCard}
        /> 
              
        <script src="main.js"></script>
      </body> 
      </html>
    </div> 
  );
}

export default App;