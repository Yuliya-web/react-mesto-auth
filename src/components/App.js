import '../index.css';
import React from 'react';
import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';
import {PopupWithForm} from './PopupWithForm.js';
import {EditProfilePopup} from './EditProfilePopup.js';
import {EditAvatarPopup} from './EditAvatarPopup.js';
import {AddPlacePopup} from './AddPlacePopup.js';
import {ImagePopup} from './ImagePopup.js';
import {apiData} from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditProfilePopupOpen, checkIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, checkIsEditAvatarPopupOpen] = React.useState(false); 
  const [isAddPlacePopupOpen, checkIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, checkIsSelectedCard] = React.useState(false);
  const [gettingCard, checkGetCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({name: '', about: '', avatar: ''});
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    apiData.getUserInfo()
    .then((userData) => {  
      setCurrentUser(userData);  
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    apiData.getCardsServer()
			.then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

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

  function handleUpdateUser({name, about}) {
    apiData.editProf({name, about})
    .then((userData) => {  
      setCurrentUser(userData);  
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      })
  }

  function handleUpdateAvatar({avatar}) {
    apiData.editAvatar({ avatar })
    .then((userData) => {  
      setCurrentUser(userData);  
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      })
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);    
  // Отправляем запрос в API и получаем обновлённые данные карточки
    apiData.changeLikeCardStatus(card, !isLiked)
    .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleCardDelete(card) {
      // Отправляем запрос в API и получаем обновлённые данные карточки
      apiData.delMyCard(card)
      .then(() => {
          // Формируем новый массив на основе имеющегося
        const newCards = cards.filter((c) => c._id !== card._id);
        // Обновляем стейт
        setCards(newCards);
      })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
  }

  function handleAddPlaceSubmit({ name, link}) {    
    apiData.addNewCard({ name, link})
    .then((newCard) => {
      setCards([newCard, ...cards]); 
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
        .finally(() => {
          closeAllPopups();
        })
  } 

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          < Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}
          />
          < Footer />            
        </div>  

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />           
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

        < PopupWithForm title="Вы уверены?" name="delete-" text={"Да"}/>
        < ImagePopup name="pic-" isOpen={selectedCard} onClose={closeAllPopups} card={gettingCard}
        /> 
              
        <script src="main.js"></script>
      </body> 
      </html>
    </div> 
    </CurrentUserContext.Provider>
  );
}

export default App;