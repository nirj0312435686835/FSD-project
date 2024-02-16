import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = ({ cardd }) => {
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  };

  const rows = chunkArray(cardd, 3);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row"
            style={{ width: "500px", height: "1500px" }}
          >
            {row.map((card, cardIndex) => (
              <div key={cardIndex}>
                <div className="product-card">
                  <div className="product-tumb">
                    <img src={card.image} alt="" className="img-card" />
                  </div>
                  <div className="product-details">
                    <span className="product-catagory">{card.title}</span>
                    <h4 className="h4-card">
                      <a href="" className="a-card">
                        {card.title}
                      </a>
                    </h4>
                    <p>{card.details}</p>
                    <div className="product-bottom-details">
                      <div className="product-price">
                        <button className="button-card">
                          <Link
                            style={{ color: "black" }}
                            to={`/card-details/${cardIndex}?title=${encodeURIComponent(
                              card.title
                            )}&image=${encodeURIComponent(
                              card.image
                            )}&details=${encodeURIComponent(card.details)}`}
                          >
                            Visit
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
