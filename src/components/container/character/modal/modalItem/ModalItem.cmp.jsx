import React from 'react';

function ModalItem({ attribute, value }) {
  return (
    <div className="general-info">
      <h1 className="general-info__attribute">{attribute}</h1>
      <h1 className="general-info__value">{value}</h1>
    </div>
  );
}

export default ModalItem;
