import { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import useAxios from '../services/Hooks/useAxios';
import { urls } from '../config/urls';

const NavBarContext = createContext();

export const useNavBarContext = () => useContext(NavBarContext);

export const NavBarProvider = ({ children }) => {
    const [dropDownAppearPhone, setDropDownAppearPhone] = useState(false);
    const [more, setMore] = useState(false);
    const isIpad = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1040px)" });
    const isPhone = useMediaQuery({ query: "(max-width: 767px)" });
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false); 

    const dropDownHandler = () => {
        setDropDownAppearPhone(prevState => !prevState);
    }
    const dropDownMoreHandler = () => {
        setMore(prevState => !prevState);
    }

    const openDialogHandler = () =>{ 
        setOpen(prevState => !prevState); 
    }

    const handleClose = () => {
        setOpen(false);
      };
    

    const { res, error } = useAxios(`${urls.getCategories}`);

    useEffect(() => {
        if (res) {
            setCategories(res);
        }
    }, [res]);


    useEffect(() => {
        setDropDownAppearPhone(false);
    }, [isIpad])
    useEffect(() => {
        setMore(false);
    }, [!isIpad]);

    return (
        <NavBarContext.Provider value={{ dropDownAppearPhone, setDropDownAppearPhone, dropDownHandler, more, setMore, isIpad, isPhone, dropDownMoreHandler, categories, openDialogHandler, open, handleClose }}>
            {children}
        </NavBarContext.Provider>
    )
}
