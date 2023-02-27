import "../../styles/header.scss";

const Header = () => {
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M1.24 9.391a7.678 7.678 0 1 1 15.356.052v.087c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 0 1-3.59 2.957.93.93 0 0 1-1.218 0 19.819 19.819 0 0 1-5.052-4.73 9.826 9.826 0 0 1-2.018-5.636v-.026Z"
                                clip-rule="evenodd"
                            />
                            <circle
                                cx="8.917"
                                cy="9.539"
                                r="2.461"
                                stroke="#CFCFCF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                            />
                            <path
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
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
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M.993 2.249c.211-.35 1.374-1.62 2.202-1.581.248.02.467.17.645.344h0c.409.4 1.58 1.909 1.646 2.226.162.78-.767 1.229-.483 2.014.724 1.772 1.972 3.02 3.746 3.744.784.285 1.234-.644 2.013-.482.317.066 1.827 1.236 2.226 1.645v0c.174.177.324.397.345.645.03.873-1.318 2.051-1.581 2.202-.62.444-1.43.436-2.416-.023-2.754-1.145-7.153-5.462-8.32-8.319C.569 3.684.539 2.87.993 2.25Z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.71.833a5.314 5.314 0 0 1 4.694 4.688M8.71 3.195a2.95 2.95 0 0 1 2.332 2.332"
                                />
                            </svg>
                        </div>
                        <span className="header-contact__number">
                            <span>Контакты:</span> <br />
                            <a href="tel:+7 (917) 510-57-59">
                                +7 (917) 510-57-59
                            </a>
                        </span>
                    </div>
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
