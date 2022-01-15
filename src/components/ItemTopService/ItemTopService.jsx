import React from "react";
import s from "./ItemTopService.module.css";

const ItemTopService = (props) => {
  return (
    <div className={s.topService}>
      <div style={{ display: "inline" }}>{props.service} </div>
      <button onClick={() => props.addTopService(props.service)}>Добавить услугу</button>
    </div>
  );
};

export default ItemTopService;
