// LanguageSelector.jsx
import Select from "react-select";
import AmFlag from "/flags/amFlag.png";
import EnFlag from "/flags/enFlag.png";
import RuFlag from "/flags/ruFlag.png";

export default function LanguageSelector({
  selectedLanguage,
  changeLanguage,
  theme,
  isMenuOpen,
}) {
  const languageOptions = [
    { value: "en", label: <img src={EnFlag} alt="English" width={20} /> },
    { value: "am", label: <img src={AmFlag} alt="Armenian" width={20} /> },
    { value: "ru", label: <img src={RuFlag} alt="Russian" width={20} /> },
  ];

 const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: "36px",
      backgroundColor: theme === "dark" ? "#4C51BF" : "#D6BCFA",
      borderColor: theme === "dark" ? "#4C51BF" : "#D6BCFA",
      color: theme === "dark" ? "#fff" : "#000",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      color: theme === "dark" ? "#fff" : "#000",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: theme === "dark" ? "#4C51BF" : "#D6BCFA",
      color: theme === "dark" ? "#fff" : "#000",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? theme === "dark"
          ? "#2C5282"
          : "#B794F4"
        : "transparent",
      color: state.isFocused ? "#fff" : theme === "dark" ? "#fff" : "#000",
      display: "flex",
      alignItems: "center",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: theme === "dark" ? "#312E81" : "#7E22CE",
      "&:hover": {
        color: theme === "dark" ? "#312E81" : "#7E22CE",
      },
    }),
    singleValue: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
    }),
  };


  return (
    <div className={`${isMenuOpen ? "visible" : "hidden"} md:inline w-20`}>
      <Select
        inputId="language-select"
        aria-label="Select language"
        options={languageOptions}
        value={languageOptions.find((o) => o.value === selectedLanguage)}
        onChange={(option) => changeLanguage(option.value)}
        getOptionLabel={(e) => e.label}
        components={{ IndicatorSeparator: null }}
        styles={customStyles}
      />
    </div>
  );
}
