import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import "./MainLayout.scss"
const MainLayout = ({leftContent, rightContent}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getNextThemeLabel = (currentTheme) => {
    const currentIndex = themes.findIndex(t => t.id === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex].label;
  };
  return (
    <div className={`container ${theme}`}>
      <header className="layout-header">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Cambiar a {getNextThemeLabel(theme)}
        </button>
      </header>
      <div className="content-container">
        <div className="leftContent">
            {leftContent}
        </div>
        <div className="rightContent">
            {rightContent}
        </div>
      </div>
    </div>);
}

export {MainLayout}