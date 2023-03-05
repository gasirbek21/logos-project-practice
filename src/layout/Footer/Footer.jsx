import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-desc">
          <Link to="/" className="footer-logo">
            LOGOS
          </Link>
          <p className="footer-rights">
            © ООО СК «АПШЕРОН» <br /> Все права защищены. 2010-2023
          </p>
          <p className="footer-terms">Пользовательское соглашение</p>
          <p className="footer-map">Карта сайта</p>
          <p className="footer-privacy">Политика конфиденциальности</p>
        </div>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            О ресторане
          </Link>
          <Link to="/deliver" className="footer-link">
            Условия доставки
          </Link>
          <Link to="/back-product" className="footer-link">
            Возврат товара
          </Link>
          <Link to="/promotion" className="footer-link">
            Акции
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
