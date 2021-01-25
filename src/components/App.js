import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';
import {PopupWithForm} from './PopupWithForm.js';
import {EditProfilePopup} from './EditProfilePopup.js';
import {EditAvatarPopup} from './EditAvatarPopup.js';
import {AddPlacePopup} from './AddPlacePopup.js';
import {ImagePopup} from './ImagePopup.js';
import {Login} from './Login.js';
import {Register} from './Register.js';
import {ProtectedRoute} from './ProtectedRoute.js';
import {InfoTooltip} from './InfoTooltip.js';
import {apiData} from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import * as auth from '../utils/auth'

export default function App() {

  const [isEditProfilePopupOpen, checkIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, checkIsEditAvatarPopupOpen] = React.useState(false); 
  const [isAddPlacePopupOpen, checkIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, checkIsSelectedCard] = React.useState(false);
  const [gettingCard, checkGetCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({name: '', about: '', avatar: ''});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false)
  const history = useHistory();
  
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

  // функция открытия попапа при регистрации
  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true)
  }

  function closeAllPopups() {
    checkIsEditProfilePopupOpen(false);
    checkIsEditAvatarPopupOpen(false);
    checkIsAddPlacePopupOpen(false);
    checkIsSelectedCard(false)
    setIsInfoTooltipOpen(false)
  }

  function handleUpdateUser({name, about}) {
    apiData.editProf({name, about})
    .then((userData) => {  
      setCurrentUser(userData); 
      closeAllPopups(); 
    })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar({avatar}) {
    apiData.editAvatar({ avatar })
    .then((userData) => {  
      setCurrentUser(userData); 
      closeAllPopups(); 
    })
      .catch((err) => {
        console.log(err);
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
      closeAllPopups();
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  } 

  // Авторизация
  function handleLoggedIn(email, password) {
    auth.authorize(email, password)
    .then((data) => {
      if (data.token) {
        setIsLoggedIn(true)
        history.push('/')
        handleInfoTooltipOpen()
      } 
    })
    .catch(() => {
      handleInfoTooltipOpen()
    })
}
  // регистрация пользователя
  function handleRegister(email, password) {
    auth.register(email, password)
    .then((res) => {
      if (res) {
        history.push('/sign-in')
      }
    })
    .catch((err) => console.log(err))
  }

  function handleLogOut() {
    setIsLoggedIn(false)
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')  
      auth.tokenCheck(jwt)
      .then((res) => {
          if (res) {
            setUserData(res.data)
            setIsLoggedIn(true)
            history.push('/')
          }
      })
      .catch((err) => console.log(err))
    }  
  }

  // проверим токен
  React.useEffect(() => {
    tokenCheck()
  });

  return (         
    <CurrentUserContext.Provider value={currentUser}>
        
      <div className="page">           
        < Header userData = {userData} handleLogOut = {handleLogOut} />

        < Switch >
          < ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} 
              onEditProfile = {handleEditProfileClick}
              onEditAvatar = {handleEditAvatarClick}
              onAddPlace = {handleAddPlaceClick}
              onCardClick = {handleCardClick}
              cards = {cards}
              onCardLike = {handleCardLike}
              onCardDelete = {handleCardDelete}
          />
          < Route path="/sign-in">
              <Login
                  handleLoggedIn = {handleLoggedIn}
                  handleInfoTooltipOpen = {handleInfoTooltipOpen}
              />
          </Route>
          < Route path="/sign-up">
              <Register
                  handleRegister={handleRegister}
              />
          </Route>
          <Route path="/">
            {loggedIn ? <Redirect to="/cards" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>

        < Footer />            
      </div>  

      < EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />           
      < EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      < AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

      < PopupWithForm title="Вы уверены?" name="delete-" text={"Да"}/>
      < ImagePopup name="pic-" isOpen={selectedCard} onClose={closeAllPopups} card={gettingCard} /> 
      < InfoTooltip loggedIn={loggedIn} isOpen = {isInfoTooltipOpen} onClose = {closeAllPopups} />

    </CurrentUserContext.Provider>    
  );
}
