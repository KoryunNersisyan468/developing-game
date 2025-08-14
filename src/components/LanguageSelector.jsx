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
      backgroundColor: theme === "dark" ? "#4C51BF" : "#D6BCFA",
      borderColor: theme === "dark" ? "#4C51BF" : "#D6BCFA",
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
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: theme === "dark" ? "#000" : "#4C51BF",
      "&:hover": {
        color: theme === "dark" ? "#000" : "#4C51BF",
      },
    }),
  };

  return (
    <div className={`w-20 ${isMenuOpen ? "visible" : "hidden"} md:inline`}>
      <Select
        options={languageOptions}
        value={languageOptions.find(
          (option) => option.value === selectedLanguage
        )}
        onChange={(option) => changeLanguage(option.value)}
        getOptionLabel={(e) => e.label}
        components={{ IndicatorSeparator: null }}
        styles={customStyles}
      />
    </div>
  );
}
