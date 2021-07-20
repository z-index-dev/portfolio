const root = document.querySelector('html');
const menuBtn = document.querySelector('.menu-btn');
const scrollPrompt = document.querySelector('.scroll-prompt');
const themeCog = document.querySelector('.theme-cog');
const themeMenu = document.querySelector('.theme-menu');
const themeButtons = [...document.querySelectorAll('.theme-select')];
let lastScrollTop = 0;

function toggleMenuBtn() {
  const menuNav = document.querySelector('.menu-nav');

  menuBtn.classList.toggle('close');
  menuNav.classList.toggle('active');
  themeMenu.classList.remove('visible');
}

function toggleThemeMenu() {
  themeMenu.classList.toggle('visible');
}

function getTheme() {
  const theme = localStorage.getItem('theme');
  root.className = theme;
}

function setTheme(theme) {
  let root = document.getElementsByTagName('html')[0];
  root.className = theme;
  localStorage.setItem('theme', className);
}

function displayScrollPrompt() {
  scrollPrompt.classList.add('scrolled');
}

function hideScrollPrompt() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    scrollPrompt.classList.remove('scrolled');
  };
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

menuBtn.addEventListener('click', toggleMenuBtn);
themeCog.addEventListener('click', toggleThemeMenu);
themeButtons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.classList.contains('light')) {
      return setTheme('light');
    };

    if (e.target.classList.contains('dark')) {
      return setTheme('dark');
    };

    if (e.target.classList.contains('fun')) {
      return setTheme('fun');
    };
  });
});

if(scrollPrompt) {
  setTimeout(displayScrollPrompt(), 1000);
  window.addEventListener('scroll', hideScrollPrompt, true);
}

getTheme();