  export function Card(props) {

  function handleCardClick() {
      props.onCardClick(props.item)
  }
  
  return (
      <>
        <div className="element" id={props.item._id}>
          <img className="element__image" alt="Место" src={props.item.link} onClick={handleCardClick}/>
          <button  className="element__delete-card" type="button" id="delete"></button>
          <div className="element__text-and-button">         
            <p className="element__title">{props.item.name}</p>
            <div className="element__like-block">
            <button className="element__like" type="button" id="like"></button>
            <p className="element__like-counter">{props.item.likes.length}</p>
            </div>
          </div>  
        </div>  
      </>
  );
}
