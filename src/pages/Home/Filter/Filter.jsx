import React from "react";
import { menuData } from "../../../utils/menuData";

const Filter = () => {
  return (
    <div className="filter">
      <div className="container">
        <ul className="filter-categories">
          {menuData.map((item) => (
            <li
              key={item.en}
              className="filter-category"
              onClick={() => navigate(`/catalog/${item.en}`)}>
              {item.ru}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
