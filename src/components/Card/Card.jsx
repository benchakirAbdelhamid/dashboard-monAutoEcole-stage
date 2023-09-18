import React from "react";

const Card = (props) => {
  return (
    <>
      {props.info_card.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h3 className="title-card">{item.title}</h3>
            <div className="content-card">
              <b>{item.nbr}</b>
              <p>
                {}
                {item.parcentage} {item.parcentage ? "%" : ""} {item.icon}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
