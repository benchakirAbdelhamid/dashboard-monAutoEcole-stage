import React, { useEffect } from 'react';
import { BiTrendingUp } from 'react-icons/bi';

const Card = (props) => {

    // useEffect(()=>{
    //     console.log('=====> : ',props.info_card)
    // })

    return (
        <>
        {props.info_card.map((item)=>{
            return(
                <div className="card" key={item.id}>
                <h3 className="title-card">{item.title}</h3>
                <div className="content-card">
                  <b>{item.nbr}</b>
                  <p>
                    {}
                    {item.parcentage} {item.parcentage ? '%' : ''} {item.icon}
                  </p>
                </div>
            </div>
            )
        })}
     
        </>
    );
}

export default Card;
