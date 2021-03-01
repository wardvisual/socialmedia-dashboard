const switchBtn = document.querySelector(`#hero__switch`);
const btnSlider = document.querySelector(`#hero__switch--slider`);
const main = document.querySelector(`#main`);
const toggleName = document.querySelector(`#hero__switch--name`);

switchBtn.addEventListener(`click`, () => {
  if (switchBtn.classList.contains("darkmode")) {
    switchBtn.classList.remove("darkmode");
    switchBtn.classList.add("lightmode");

    switchBtn.style = `
      background: var(--toggle-light-theme);
    `;
    btnSlider.style = `
      background: var(--white);
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
    btnSlider.style = `
      background: var(--very-dark-blue);
    `;

    toggleName.textContent = "Dark Mode";
    lightmode();
  }
});

const darkmode = () => {
  main.classList.contains("hero--theme-dark") &&
    main.classList.remove("hero--theme-dark");
  main.classList.add("hero--theme-light");
  document.body.style = `
    background-color: var(--white);
  `;
};

const lightmode = () => {
  main.classList.contains("hero--theme-light") &&
    main.classList.remove("hero--theme-light");
  main.classList.add("hero--theme-dark");
  document.body.style = `
    background-color: var(--very-dark-blue2);
    `;
};
