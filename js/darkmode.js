const switchBtn = document.querySelector(`#hero__switch`);
const btnSlider = document.querySelector(`#switch__slider`);
const main = document.querySelector(`#main`);
const toggleName = document.querySelector(`#hero__switch__name`);

switchBtn.addEventListener(`click`, () => {
  if (switchBtn.classList.contains("darkmode")) {
    switchBtn.classList.remove("darkmode");
    switchBtn.classList.add("lightmode");

    switchBtn.style = `
    background: var(--toggle-light-theme);
    `;
    toggleName.textContent = "Light Mode";
    toggleName.style = `color: var(--dark-grayish-blue)`;
    darkmode();
  } else if (switchBtn.classList.contains("lightmode")) {
    switchBtn.classList.remove("lightmode");
    switchBtn.classList.add("darkmode");
    switchBtn.style = `
        background: var(--toggle-dark-theme);
      `;

    toggleName.textContent = "Dark Mode";
    lightmode();
  }
});

const darkmode = () => {
  main.classList.contains("darkmode__theme") &&
    main.classList.remove("darkmode__theme");
  main.classList.add("lightmode__theme");
  document.body.style = `
    background-color: var(--white);
  `;
};

const lightmode = () => {
  main.classList.contains("lightmode__theme") &&
    main.classList.remove("lightmode__theme");
  main.classList.add("darkmode__theme");
  document.body.style = `
    background-color: var(--very-dark-blue2);
    `;
};
