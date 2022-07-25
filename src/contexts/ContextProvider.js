import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentMode, setCurrentMode] = useState('Light');
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [isThemeSettings, setIsThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setIsThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setIsThemeSettings(false);
    }

    const handleClick = (clicked) => {
        if (isClicked[clicked]) {
            setIsClicked(initialState);
        } else {
            setIsClicked({ ...initialState, [clicked]: true });
        }
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentMode,
                currentColor,
                isThemeSettings,
                setColor,
                setMode,
                setIsThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);