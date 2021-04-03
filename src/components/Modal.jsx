import React from 'react';

function Modal({ character, show, toggle }) {
  const showHideClassName = show ? 'modal modal--show' : 'modal modal--hide';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {character.name}
        <button type="button" onClick={toggle}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
