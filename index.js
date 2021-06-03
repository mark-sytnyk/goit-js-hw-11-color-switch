const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
  }
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const generateBackgroundColor = () => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
  }
  let intervalId = null;
  let isActive = false;
  const startInterval = () => {
    if (isActive) {
      return
    }
    intervalId = setInterval(generateBackgroundColor, 1000)
    isActive = true
  }
  const stopInterval = () => {
    clearInterval(intervalId)
    isActive = false
  }
  refs.start.addEventListener('click', startInterval)
  refs.stop.addEventListener('click', stopInterval)