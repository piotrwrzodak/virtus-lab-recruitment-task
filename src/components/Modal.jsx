import React from 'react';
import { connect } from 'react-redux';

import { selectFilmsState } from '../store/data/films/films.selectors';
import ModalItem from './ModalItem';

function Modal({ character, films, show, toggle }) {
  const showHideClassName = show ? 'modal modal--show' : 'modal modal--hide';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="info-container">
          <ModalItem attribute="Name:" value={character.name} />
          <ModalItem attribute="Gender:" value={character.gender} />
          <ModalItem attribute="Birth year:" value={character.birth_year} />
          <ModalItem attribute="Mass: " value={character.mass} />
          <ModalItem attribute="Height:" value={character.height} />
          <ModalItem
            attribute="Films:"
            value={films.map((film) =>
              character.films.includes(film.url) ? (
                <li
                  className="general-info__value"
                  key={film.url + character.url}
                >
                  {film.title}
                </li>
              ) : null
            )}
          />

          <button className="button" type="button" onClick={toggle}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  films: selectFilmsState(state),
});

export default connect(mapStateToProps, null)(Modal);
