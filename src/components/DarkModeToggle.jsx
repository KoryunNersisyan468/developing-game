export default function DarkModeToggle({ theme, isMenuOpen, changeTheme }) {
  return (
    <button
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      className={`p-2 border text-lg rounded ${
        isMenuOpen ? "visible" : "hidden"
      } md:inline`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
}
