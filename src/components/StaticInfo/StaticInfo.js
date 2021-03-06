import React from "react";

import "./StaticInfo.css";

import calli from "../../resources/img/calli.png";

const StaticInfo = () => {
  return (
    <section className="StaticInfo-container w85">
      <div className="StaticInfo-card">
        <p>
          Авторские конфеты ручной работы, наборы с шоколадными буквами под
          любую вашу фразу, клубника в шоколаде, фрукты в шоколаде, а также
          многое другое для вкусного подарка и вашего праздника.
        </p>
      </div>
      <div className="StaticInfo-card">
        <p>
          Состав конфет ПОЛНОСТЬЮ из натуральных продуктов, без маргарина и
          растительных сливок. Все наши шоколадные изделия выполнены
          ИСКЛЮЧИТЕЛЬНО из натурального бельгийского шоколада высокого качества
          фирмы Callebaut.
        </p>
        <img src={calli} alt="" draggable="false" />
      </div>
    </section>
  );
};

export default StaticInfo;
