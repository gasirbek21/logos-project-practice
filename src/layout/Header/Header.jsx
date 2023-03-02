import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import { CustomContext } from "../../utils/Context";

const Header = () => {
  const { user, setUser } = useContext(CustomContext);
  const userLogout = () => {
    setUser({
      email: "",
    });
    localStorage.removeItem("user");
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header-nav">
          <h1 className="header-logo">LOGOS</h1>
          <div className="header-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              fill="none">
              <path
                stroke="#CFCFCF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1.24 9.391a7.678 7.678 0 1 1 15.356.052v.087c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 0 1-3.59 2.957.93.93 0 0 1-1.218 0 19.819 19.819 0 0 1-5.052-4.73 9.826 9.826 0 0 1-2.018-5.636v-.026Z"
                clipRule="evenodd"
              />
              <circle
                cx="8.917"
                cy="9.539"
                r="2.461"
                stroke="#CFCFCF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <input
              type="text"
              className="header-search__input"
              placeholder="Введите адрес доставки"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none">
              <circle
                cx="9.767"
                cy="9.767"
                r="8.989"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.018 16.485 19.542 20"
              />
            </svg>
          </div>
          <div className="header-contact">
            <div className="header-contact__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none">
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M.993 2.249c.211-.35 1.374-1.62 2.202-1.581.248.02.467.17.645.344h0c.409.4 1.58 1.909 1.646 2.226.162.78-.767 1.229-.483 2.014.724 1.772 1.972 3.02 3.746 3.744.784.285 1.234-.644 2.013-.482.317.066 1.827 1.236 2.226 1.645v0c.174.177.324.397.345.645.03.873-1.318 2.051-1.581 2.202-.62.444-1.43.436-2.416-.023-2.754-1.145-7.153-5.462-8.32-8.319C.569 3.684.539 2.87.993 2.25Z"
                  clipRule="evenodd"
                />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.71.833a5.314 5.314 0 0 1 4.694 4.688M8.71 3.195a2.95 2.95 0 0 1 2.332 2.332"
                />
              </svg>
            </div>
            <span className="header-contact__number">
              <span>Контакты:</span> <br />
              <a href="tel:+7 (917) 510-57-59">+7 (917) 510-57-59</a>
            </span>
          </div>
          {user.email.length ? (
            <span className="header-user" onClick={userLogout}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="11.5788"
                  cy="7.27803"
                  r="4.77803"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Выйти{" "}
            </span>
          ) : (
            <Link to="/register">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="11.5788"
                  cy="7.27803"
                  r="4.77803"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Войти
            </Link>
          )}
          <button className="header-btn">
            Корзина
            <span className="header-count">3</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
