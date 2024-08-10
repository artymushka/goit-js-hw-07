const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const newColor = getRandomHexColor();

  document.querySelector('.color').textContent = newColor;

  document.querySelector('.widget').style.backgroundColor = newColor;
});