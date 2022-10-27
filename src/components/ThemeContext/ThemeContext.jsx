import React, { createContext } from 'react';
const getInitialTheme = () => {
    if(typeof window !== "undefined" && window.localStorage){
        const sotredPrefs = window.localStorage.getItem("current-theme");
        if(typeof sotredPrefs === "string"){
            return sotredPrefs;
        }
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
            return "dark";
        }
    }
    return "light";
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ initialTheme, children }) => {
    const [ theme, setTheme ] = React.useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark? 'light':"dark");
        root.classList.add(existing);

        localStorage.setItem("current-theme", existing);

        if(initialTheme) {
            checkTheme(initialTheme);
        };
        
    };
    React.useEffect(() => {
        checkTheme(initialTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);
    return(
        <ThemeContext.Provider value={[ theme, setTheme ]}>
            {children}
        </ThemeContext.Provider>
    )
    
};


export default ThemeProvider;