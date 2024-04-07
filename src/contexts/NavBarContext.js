// NavBarContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const NavBarContext = createContext();

export const useNavBarContext = () => useContext(NavBarContext);

export const NavBarProvider = ({ children }) => {
    const [dropDownAppearPhone, setDropDownAppearPhone] = useState(false);
    const [more, setMore] = useState(false);
    const isIpad = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1040px)" });
    const isPhone = useMediaQuery({ query: "(max-width: 767px)" });

    const dropDownHandler = () => {
        setDropDownAppearPhone(prevState => !prevState);
    }
    const dropDownMoreHandler = () => {
        setMore(prevState => !prevState);
    }

    useEffect(() => {
        setDropDownAppearPhone(false);
    }, [isIpad])
    useEffect(() => {
        setMore(false);
    }, [!isIpad])

    return (
        <NavBarContext.Provider value={{ dropDownAppearPhone, setDropDownAppearPhone, dropDownHandler, more, setMore, isIpad, isPhone, dropDownMoreHandler }}>
            {children}
        </NavBarContext.Provider>
    )
}
