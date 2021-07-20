// // Select DOM items
// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// const navItems = document.querySelectorAll('.nav-item');

// // Set the initial state of the menu
// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
// 	if(!showMenu) {
// 		menuBtn.classList.add('close');
// 		menu.classList.add('show');
// 		menuNav.classList.add('show');
// 		menuBranding.classList.add('show');
// 		navItems.forEach(item => item.classList.add('show'));

// 		// Set menu state
// 		showMenu = true;
// 	} else {
// 		menuBtn.classList.remove('close');
// 		menu.classList.remove('show');
// 		menuNav.classList.remove('show');
// 		menuBranding.classList.remove('show');
// 		navItems.forEach(item => item.classList.remove('show'));

// 		// Set menu state
// 		showMenu = false;
// 	}
// }

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

function setTheme(className) {
  var root = document.getElementsByTagName('html')[0];
  root.className = className;
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

window.addEventListener('scroll', hideScrollPrompt, true);

setTimeout(displayScrollPrompt(), 1000);