import React, { useState } from 'react';
import Modal from './modal';

function Character({ character }) {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <li className="character" onClick={toggle}>
        <h1>{character.name}</h1>
        <h2>{character.gender}</h2>
        <h2>{character.birth_year}</h2>
      </li>
      <Modal character={character} show={show} toggle={toggle} />
    </>
  );
}

export default Character;
