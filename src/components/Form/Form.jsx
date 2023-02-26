import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

const Form = () => {
    return (
        <>
            <form action="" className="form">
                <p className="from-email">
                    aaa@mail.ru <FaPencilAlt />
                </p>
                <h2 className="form-title">Регистрация</h2>

                <h2 className="form-title">
                    Придумайте пароль для входа на любом устройстве
                </h2>

                <input type="text" className="form-field" />
                <button className="form-btn" type="button">
                    Продолжить
                </button>

                <input type="text" className="form-field" />
                <button className="form-btn" type="submit">
                    Создать аккаунт
                </button>

                <Link to="/login">У меня есть аккаунт</Link>
            </form>
        </>
    );
};

export default Form;
