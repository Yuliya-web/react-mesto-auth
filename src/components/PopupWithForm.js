export function PopupWithForm(props) {

  const openedPopup = (props.isOpen) ? ' popup_opened' : '';


  return (    
    <section className={`${props.name}popup`+ openedPopup} >
      <form className="popup__container" name={props.name} novalidate>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button> 
        <h3 className="popup__title" >{props.title}</h3>
        {props.children}
      </form>
    </section>    
  )
}