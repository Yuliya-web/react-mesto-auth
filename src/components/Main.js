import {Card} from './Card.js';
import {apiData} from '../utils/Api.js';
import React from 'react';

export function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([     
      apiData.getUserInfo(),
      apiData.getCardsServer()
    ])
      .then((data) => {  
          const [userData, initCards] = data;
          setUserAvatar(userData.avatar); 
          setUserName(userData.name);
          setUserDescription(userData.about);
          setCards(initCards); 
      })
        .catch((err) => {
            console.log(err);
        });
  }, [] )


  return(
    <main className="content">      
      <section className="profile">
        <div className="profile__info">
          <img className="profile__avatar" alt="Аватар" src={userAvatar} />
          <button className="profile__edit-avatar" onClick={props.onEditAvatar} type="button"></button>
          <div className="profile__person">
            <div className="profile__title-and-edit">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>              
          </div>                      
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>         
      </section>     
  
      <section className="elements">            
        {cards.map((card) => {
          return(
            <Card 
            key={card._id}
            item={card}           
            onCardClick={props.onCardClick}
            /> 
          )
        })}    
      </section> 
    </main>  
  )
}
