import React from 'react';

function Modal({ character, films, show, toggle }) {
  const showHideClassName = show ? 'modal modal--show' : 'modal modal--hide';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="info-container">
          <div className="general-info">
            <h1 className="general-info__item">Name:</h1>
            <h1 className="general-info__attribute">{character.name}</h1>
          </div>
          <div className="general-info">
            <h1 className="general-info__item">Gender: </h1>
            <h1 className="general-info__attribute">{character.gender}</h1>
          </div>
          <div className="general-info">
            <h1 className="general-info__item">Birth year:</h1>
            <h1 className="general-info__attribute"> {character.birth_year}</h1>
          </div>
          <div className="general-info">
            <h1 className="general-info__item">Mass: </h1>
            <h1 className="general-info__attribute">{character.mass}</h1>
          </div>

          <div className="general-info">
            <h1 className="general-info__item">Height: </h1>
            <h1 className="general-info__attribute">{character.height}</h1>
          </div>
          <div className="general-info">
            <h1 className="general-info__item">Films:</h1>
            <ul className="general-info__attribute">
              {films.map((film) =>
                character.films.includes(film.url) ? (
                  <li
                    className="general-info__attribute"
                    key={film.url + character.url}
                  >
                    {film.title}
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <button className="button" type="button" onClick={toggle}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
