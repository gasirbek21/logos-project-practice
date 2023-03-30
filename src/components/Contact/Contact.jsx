import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          <h3 className="contact-content__title">КОНТАКТЫ</h3>
          <div className="contact-content__location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none">
              <path
                stroke="#6D9C74"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.24 10.391a7.678 7.678 0 0 1 15.356.052v.087c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 0 1-3.59 2.956.93.93 0 0 1-1.218 0 19.815 19.815 0 0 1-5.052-4.73 9.826 9.826 0 0 1-2.018-5.635v-.026Z"
                clipRule="evenodd"
              />
              <circle
                cx="11.917"
                cy="10.539"
                r="2.461"
                stroke="#6D9C74"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <div className="__location-address">
              <p>Наш адрес:</p> МО, городской округ Красногорск, село Ильинкое,{" "}
              <br />
              Экспериментальная улица, 10
            </div>
          </div>
          <div className="contact-content__mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none">
              <path
                stroke="#6D9C74"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m17.268 9.061-4.266 3.434a2.223 2.223 0 0 1-2.746 0L5.954 9.061"
              />
              <path
                stroke="#6D9C74"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 0 1 1.326 3.704v6.528a5.017 5.017 0 0 1-1.326 3.704 4.957 4.957 0 0 1-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5Z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="contact-content__mail-address">Наша почта:</p>
              auto.wash@gmail.com
            </div>
          </div>
          <div className="contact-content__call">
            <button className="btn contact-content__btn" type="button">
              ЗАБРОНИРОВАТЬ СТОЛ
            </button>
            <div className="contact-call__num">
              <a href="+79175105759" className="contact-call__num">
                +7 (917) 510-57-59
              </a>
              <p className="contact-content__call-text">
                Звоните или оставляйте заявку
              </p>
            </div>
          </div>
          <div className="contact-content__social">
            <p className="contact-social__text">Мы в соц сетях:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#fff"
                  d="M16.625 0H2.375A2.377 2.377 0 0 0 0 2.375v14.25A2.377 2.377 0 0 0 2.375 19H9.5v-6.531H7.125V9.5H9.5V7.125a3.562 3.562 0 0 1 3.563-3.563h2.374v2.97H14.25c-.655 0-1.188-.063-1.188.593V9.5h2.97l-1.188 2.969h-1.781V19h3.562A2.377 2.377 0 0 0 19 16.625V2.375A2.377 2.377 0 0 0 16.625 0Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h19v19H0z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#fff"
                  d="M11.211 10.471c-.304-.177-.727-.177-1.071-.177H9.01v2.327h1.037c.383 0 .873.028 1.204-.204.304-.205.476-.606.476-.988 0-.355-.212-.78-.516-.958Zm-.426-1.987c.252-.192.384-.533.384-.847 0-.342-.159-.67-.45-.847-.304-.177-.86-.136-1.217-.136H9.01v2.048h.651c.37 0 .807.028 1.124-.218ZM16.348 0H4.027a3.34 3.34 0 0 0-3.34 3.34v12.32A3.34 3.34 0 0 0 4.027 19h12.32a3.34 3.34 0 0 0 3.34-3.34V3.34A3.34 3.34 0 0 0 16.348 0Zm-5.645 14.356H6.82V4.988h4.241c1.229 0 2.362.782 2.362 2.16 0 1.066-.594 1.795-1.353 2.022v.027c1.125.233 1.928.844 1.928 2.317 0 1.364-.929 2.842-3.296 2.842Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.688 0h19v19h-19z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_19_339)">
                <path
                  d="M15.8125 0H3.93748C1.96982 0 0.375 1.59482 0.375 3.56248V15.4375C0.375 17.4052 1.96982 19 3.93748 19H15.8125C17.7802 19 19.375 17.4051 19.375 15.4375V3.56248C19.375 1.59482 17.7802 0 15.8125 0ZM15.7116 11.6268C15.6474 12.4177 15.0466 13.427 14.207 13.5731C11.5173 13.7821 8.33006 13.756 5.54422 13.5731C4.67496 13.4638 4.10379 12.4165 4.03967 11.6268C3.9043 9.96667 3.9043 9.02141 4.03967 7.36129C4.10379 6.57161 4.68923 5.53015 5.54422 5.43517C8.29804 5.20359 11.5031 5.25347 14.207 5.43517C15.1736 5.47078 15.6474 6.46711 15.7116 7.25798C15.8445 8.9181 15.8445 9.96667 15.7116 11.6268Z"
                  fill="white"
                />
                <path
                  d="M8.6875 11.875L12.25 9.5L8.6875 7.125V11.875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_339">
                  <rect
                    width="19"
                    height="19"
                    fill="white"
                    transform="translate(0.375)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="none">
              <g fill="#fff" clip-path="url(#a)">
                <path d="M11.18 8.28a2.076 2.076 0 0 0-1.688-.874c-.693 0-1.31.346-1.687.874a2.14 2.14 0 0 0-.392 1.22c0 1.145.934 2.08 2.08 2.08 1.144 0 2.079-.935 2.079-2.08 0-.452-.151-.874-.392-1.22Z" />
                <path d="M12.49 8.295c.152.301.242.783.242 1.205a3.244 3.244 0 0 1-3.24 3.24A3.235 3.235 0 0 1 6.254 9.5c0-.437.09-.904.241-1.205H4.671v4.836c0 .633.557 1.19 1.19 1.19h7.263c.633 0 1.19-.557 1.19-1.19V8.295h-1.823ZM13.772 4.95h-1.748v2.004h1.989V4.935l-.241.015Z" />
                <path d="M14.224.009H4.76A4.771 4.771 0 0 0 0 4.77v9.478c0 2.606 2.14 4.746 4.761 4.746h9.478A4.771 4.771 0 0 0 19 14.232V4.77C18.985 2.148 16.845.01 14.224.01Zm1.145 8.272v4.851c0 1.266-.98 2.245-2.245 2.245H5.86a2.213 2.213 0 0 1-2.245-2.245V5.87c0-1.266.98-2.245 2.245-2.245h7.263c1.265 0 2.245.98 2.245 2.245v2.41Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h19v19H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
