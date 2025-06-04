import {createContext} from "react";

const themes = [
    {id: "dark", label: "Modo Oscuro"},
    {id: "light", label: "Modo Claro"},
    {id: "red", label: "Modo Rojo"},
    {id: "blue", label: "Modo Azul"}
];

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toogleTheme = () => {
        const currentIndex = themes.findIndex(t => t.id === theme);
        //cuando currentIndex + 1 sea igual al tamaño del array, themes.length, vuelva a 0. al punto de partida
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex].id);
    }

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme, themes}}>
        {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider, themes }