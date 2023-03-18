import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <img
        src={`${item.image[0] === "." ? "../" : ""}${item.image}`}
        alt="img"
        className="card-img"
      />
      <div className="card-info">
        <h3 className="card-info__title">{item.title}</h3>
        <p className="card-info__desc">{item.description}</p>
        <div className="card-info__footer">
          <span className="card-info__price">{item.price}</span>
          <button type="button" className="btn">
            В корзину
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none">
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7.422 19.82a.766.766 0 0 1 0 1.53.764.764 0 1 1 0-1.53ZM18.675 19.82a.766.766 0 1 1-.002 1.532.766.766 0 0 1 .002-1.532Z"
                clipRule="evenodd"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m2.75 3.25 2.08.36.963 11.473a1.802 1.802 0 0 0 1.797 1.653h10.912c.896 0 1.656-.658 1.785-1.546l.949-6.558a1.34 1.34 0 0 0-1.327-1.533H5.164M14.125 10.795h2.773"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
