export const dropMenus = () => {

  //Menu burger

  //Variables
  const burgerButton = document.querySelector('.burger-menu-button');
  const burgerLinks = document.querySelectorAll('.burger-link');
  const burgerMenu = document.querySelector('.burger-links');

  const profileButton = document.querySelector('.link-user');
  const menuAuthorization = document.querySelector('.wrapper-menu-auth');
  const btnRegister = document.querySelector('.register');

  const toggleClass = () => {
    burgerButton.classList.toggle('active-button');
    burgerMenu.classList.toggle('active-menu');
  }

  burgerButton.addEventListener('click', () => {
    toggleClass();
    menuAuthorization.classList.remove('active-profile');
  });

  burgerLinks.forEach(link => link.addEventListener('click', () => {
    toggleClass();
  }));

  window.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
      burgerButton.classList.remove('active-button');
      burgerMenu.classList.remove('active-menu');
    }
  });

  //Menu Profile

  profileButton.addEventListener('click', () => {
    menuAuthorization.classList.toggle('active-profile');
  });

  btnRegister.addEventListener('click', () => {
    menuAuthorization.classList.remove('active-profile')
  })

  menuAuthorization.classList.remove('active-profile')


  window.addEventListener('click', (event) => {
    console.log(event.target)
    if (!menuAuthorization.contains(event.target) && !profileButton.contains(event.target)) {
      menuAuthorization.classList.remove('active-profile');
    }
  });
}