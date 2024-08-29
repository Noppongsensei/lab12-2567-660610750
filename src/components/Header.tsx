import { LangContext } from "@contexts/LangContext";
import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <div>
      <p
        className="display-3 text-center fst-italic"
        style={{ color: theme.fgColor }}
      >
        {lang.header}
      </p>
    </div>
  );
};
