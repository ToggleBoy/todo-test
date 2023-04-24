import React from "react";
import style from './BodyContainer.module.css'

const BodyContainer = ({ onShowAddModal }) => {
  return (
    <div className={style.bodyContainer}>
      <input type="text" placeholder="search" className={style.searchField} />
      <input type="button" value="✎" onClick={onShowAddModal} className={style.addButton}/>
    </div>
  );
};

export default BodyContainer;
