export default function DarkModeToggle({ theme, isMenuOpen, changeTheme }) {
  return (
    <button
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      aria-pressed={theme === "dark"}
      className={`${isMenuOpen ? "visible" : "hidden"} md:inline p-2 border rounded text-lg`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
}
