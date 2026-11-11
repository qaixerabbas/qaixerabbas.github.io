// Change this value in code to choose a palette: 'ocean', 'warm', 'forest', or 'dark'.
const activeTheme = 'ocean';
// Set the two themes used by the toggle. Any two presets can be selected.
const toggleThemes = ['ocean', 'dark'];
const themePresets = {
  ocean: { background: '#ffffff', foreground: '#595959', heading: '#043361', accent: '#2f80ed', accentHover: '#1769c2', navigation: '#0f172a', navigationText: '#ffffff' },
  warm: { background: '#fffaf3', foreground: '#51463d', heading: '#704214', accent: '#c46b3c', accentHover: '#9e4f2c', navigation: '#3f2d20', navigationText: '#fffaf3' },
  forest: { background: '#f4fbf7', foreground: '#34524a', heading: '#155e52', accent: '#1f9d8b', accentHover: '#147568', navigation: '#12372f', navigationText: '#f4fbf7' },
  dark: { background: '#202124', foreground: '#d6d8dc', heading: '#f1f3f4', accent: '#8ab4f8', accentHover: '#aecbfa', navigation: '#111214', navigationText: '#f1f3f4' }
};

const selectedTheme = themePresets[activeTheme];
if (!selectedTheme) throw new Error(`Unknown theme: ${activeTheme}`);
if (toggleThemes.length !== 2 || toggleThemes.some((theme) => !themePresets[theme]) || !toggleThemes.includes(activeTheme)) {
  throw new Error('The theme toggle must contain the active theme and exactly one other valid theme.');
}

const applyThemeVariables = (theme) => {
  Object.entries(theme).forEach(([name, value]) => document.documentElement.style.setProperty(`--theme-${name}`, value));
};
applyThemeVariables(selectedTheme);

const themeStyles = document.createElement('style');
themeStyles.textContent = `
  body { background-color: var(--theme-background) !important; color: var(--theme-foreground) !important; }
  h1, h2, h3, h4, h5, h6 { color: var(--theme-heading) !important; }
  a { color: var(--theme-accent) !important; }
  a:hover { color: var(--theme-accentHover) !important; }
  strong, autocolor { color: var(--theme-foreground) !important; }
  .site-nav { background-color: var(--theme-navigation) !important; }
  .site-nav a, .nav-toggle { color: var(--theme-navigationText) !important; }
  .theme-toggle { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 30px; margin: 0; padding: 4px clamp(5px, 1vw, 8px); box-sizing: border-box; border: 1px solid color-mix(in srgb, var(--theme-navigationText) 35%, transparent); border-radius: 999px; background: color-mix(in srgb, var(--theme-navigationText) 12%, transparent); color: var(--theme-navigationText); cursor: pointer; font-size: 0.75rem; line-height: 1; opacity: 0.9; transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease; }
  .theme-toggle:hover { border-color: color-mix(in srgb, var(--theme-navigationText) 70%, transparent); background: color-mix(in srgb, var(--theme-navigationText) 22%, transparent); transform: translateY(-1px); }
  .theme-toggle:focus-visible { outline: 2px solid var(--theme-accent); outline-offset: 3px; }
  .theme-toggle-icon { display: block; transition: transform 0.25s ease; }
  .theme-toggle:hover .theme-toggle-icon { transform: rotate(12deg) scale(1.08); }
  .social-icons a { color: var(--theme-accent) !important; }
  .publications ol.bibliography li .links a.btn { color: var(--theme-foreground) !important; border-color: var(--theme-foreground) !important; }
`;
document.head.appendChild(themeStyles);

const themeToggle = document.querySelector('#theme-toggle');
let currentTheme = activeTheme;
const applyTheme = (themeName) => {
  applyThemeVariables(themePresets[themeName]);
  currentTheme = themeName;
  const nextTheme = toggleThemes[(toggleThemes.indexOf(currentTheme) + 1) % toggleThemes.length];
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  themeToggle.setAttribute('title', `Switch to ${nextTheme} theme`);
  themeToggle.innerHTML = nextTheme === 'dark' ? '<i class="fas fa-moon theme-toggle-icon" aria-hidden="true"></i>' : '<i class="fas fa-sun theme-toggle-icon" aria-hidden="true"></i>';
};

themeToggle.addEventListener('click', () => {
  const nextTheme = toggleThemes[(toggleThemes.indexOf(currentTheme) + 1) % toggleThemes.length];
  applyTheme(nextTheme);
});
applyTheme(currentTheme);

// Set to true to show publication images.
const showPublicationImages = false;
if (showPublicationImages) document.body.classList.add('show-publication-images');
