import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Card.module.css";
import ItemTopService from "../ItemTopService/ItemTopService";

const Card = () => {
  const tractors = useSelector((state) => {
    return state.owner.unitsCatalog;
  });
  const ownerData = useSelector((state) => {
    return state.owner.profile;
  });
  const topServices = useSelector((state) => {
    return state.owner.topServices;
  });

  const [tractorType, setTractorType] = useState("");
  const [choosenTractor, setChoosenTractor] = useState({});
  const [choosenTractorDescription, setChoosenTractorDescription] = useState("");
  const [choosenTractorImage, setChoosenTractorImage] = useState("");
  const [choosenTractorServices, setChoosenTractorServices] = useState("");

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [viber, setViber] = useState("");
  const [telegram, setTelegram] = useState("");
  const [jobPlace, setJobPlace] = useState("");

  console.log("tractors", tractors);

  console.log("image", choosenTractorImage);
  console.log("ddd", choosenTractor);

  const handleTractorType = (e) => {
    setTractorType(e.target.value);
    const tr = tractors.find((item) => item.unitType === tractorType);
    setChoosenTractor(tr);
    setChoosenTractorDescription(tr.description);
    setChoosenTractorImage(tr.image);
    setChoosenTractorServices(tr.services);
    setName(`${ownerData.last_name} ${ownerData.first_Name} ${ownerData.middle_name}`);
    setTel(ownerData.phone);
    setViber(ownerData.viber);
    setTelegram(ownerData.telegram);
    setJobPlace(`${ownerData.city} + 50 km`);
  };

  const addTopService = (service) => {
    setChoosenTractorServices([...choosenTractorServices, service]);
  };

  const delChoosenService = (idx) => {
    setChoosenTractorServices([...choosenTractorServices].filter((p, ind) => ind !== idx));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className={s.leftSide}>
          <div>
            <input className={s.inputType} type="text" placeholder="Введите марку транспортного средства" value={tractorType} onChange={handleTractorType} />
            <div className={s.image}>
              {choosenTractorImage ? (
                <img src={require(`../../mockData/img/${choosenTractorImage}`)} alt="tractor" />
              ) : (
                <img src={require(`../../mockData/img/default.jpg`)} alt="tractor" />
              )}
            </div>
            <div className={s.text}>Техническая характеристика:</div>
            <textarea className={s.description} rows="4" cols="40" name="text" value={choosenTractorDescription}></textarea>
            <div className={s.text}>Описание:</div>
            <textarea className={s.description} rows="4" cols="40" name="text"></textarea>

            <input className={s.inputType} type="text" placeholder="Поиск услуг" />
          </div>
          <div className={s.text}>Топ услуги:</div>
          {topServices.map((service) => (
            <ItemTopService service={service} key={service} addTopService={addTopService} />
          ))}
          <button className={s.addButton}>+</button>
        </div>

        <div className={s.rightSide}>
          <button className={s.delButton}>х</button>

          <label style={{ display: "block" }}>
            ФИО: <input type="text" value={name} />
          </label>
          <label style={{ display: "block" }}>
            Тел: <input type="text" value={tel} />
          </label>
          <label style={{ display: "block" }}>
            Viber: <input type="text" value={viber} />
          </label>
          <label style={{ display: "block" }}>
            Telegram: <input type="textarea" value={telegram} />
          </label>
          <label style={{ display: "block" }}>
            Место работы: <input type="text" value={jobPlace} />
          </label>
          <div className={s.text}>Услуги:</div>
          <div className={s.service}>
            {choosenTractorServices
              ? choosenTractorServices.map((service, idx) => (
                  <div key={service}>
                    <div style={{ marginRight: "30px" }}>{service}</div>
                    <button onClick={() => delChoosenService(idx)}>Удалить услугу</button>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
