const run = () => {
  const button = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav-right'),
      curtain = document.querySelector('.curtain');

  const hamburgerClose = () => {
    button.classList.remove("clicked");
    menu.classList.remove('nav-active');
    curtain.style.display = 'none';
  }

  const hamburgerOpen = () => {
    button.classList.add("clicked");
    menu.classList.add('nav-active');
    curtain.style.display = 'block';
  }

  const onHamburgerClick = () => {
    let clicked = button.classList.value.includes('clicked');
    
    clicked ? hamburgerClose() : hamburgerOpen();
  }
  
  //fixes a bug that happens if you resize window while menu is open
  const onResize = () => {
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    width >= 600 ? hamburgerClose() : false;
  }

  document.querySelector('.nav-opener').addEventListener("click", onHamburgerClick);
  window.addEventListener("resize", onResize);
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') run();
});