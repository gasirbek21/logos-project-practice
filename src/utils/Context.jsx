import { createContext } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
    const value = {
        name: "gas",
        age: 22,
    };

    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};
