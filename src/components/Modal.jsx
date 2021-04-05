import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { selectFilmsState } from '../store/data/films/films.selectors';
import ModalItem from './ModalItem';

function Modal({ character, films, show, toggle }) {
  const showHideClassName = show ? 'modal modal--show' : 'modal modal--hide';
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      toggle();
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, toggle]);

  return (
    show && (
      <div className={showHideClassName}>
        <div className="modal-main" ref={node}>
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
    )
  );
}

const mapStateToProps = (state) => ({
  films: selectFilmsState(state),
});

export default connect(mapStateToProps, null)(Modal);
