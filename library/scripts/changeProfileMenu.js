import { getLocalStorageUsersCredits, localStorageUsersCredits } from "./localStorage/getLocalStorageUserCredits.js";
import { changeModalUserProfile } from "./modals/changeModalUserProfile.js";
import { renderRentedBooks } from "./renderRentedBooks.js";
import { changeBtns } from "./helpers.js";
import { userLogOut } from "./userLogOut.js";
import {
  setCurrentUserCreditsLogged,
  currentUserCreditsLogged,
  profileButton,
  titleDropMenu,
  btnLogInDropMenu,
  btnMyProfile,
  btnsWrapper,
  btnRegister,
  btnLogOut,
  menuAuthorization,
  modalUserProfile,
  body,
} from "./variables.js";

export const changeProfileMenu = (registered) => {
  getLocalStorageUsersCredits(registered);
  setCurrentUserCreditsLogged(localStorageUsersCredits.find(user => user.logged) || {});
  if (Object.keys(currentUserCreditsLogged).length && currentUserCreditsLogged.logged) {
      profileButton.style.background = 'none';
      profileButton.innerHTML = `<span class='user-logged'>
        ${currentUserCreditsLogged.firstName[0].toUpperCase() + currentUserCreditsLogged.lastName[0].toUpperCase()}
      </span>`;
      titleDropMenu.textContent = `${currentUserCreditsLogged.cardNumber}`;
      btnLogInDropMenu.remove();
      btnMyProfile.classList.add('btn-my-profile');
      btnMyProfile.textContent = 'My profile';
      btnsWrapper.appendChild(btnMyProfile);
      btnRegister.remove();
      btnLogOut.classList.add('log-out');
      btnLogOut.textContent = 'Log Out';
      btnsWrapper.appendChild(btnLogOut);
      profileButton.setAttribute('title',
          `${currentUserCreditsLogged.firstName.toUpperCase() + ' ' + currentUserCreditsLogged.lastName.toUpperCase()}`);
      changeModalUserProfile();
      renderRentedBooks();
      changeBtns();

    // Event listener ??
      btnMyProfile.addEventListener('click', () => {
        menuAuthorization.classList.remove('active-profile-menu');
        modalUserProfile.classList.add('active-blackout');
        body.classList.add('no-scroll');
      });
      btnLogOut.addEventListener('click', () => userLogOut());
  } else {
      profileButton.style.background = '';
      profileButton.innerHTML = '';
  };
};