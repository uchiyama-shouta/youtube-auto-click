setInterval(() => {
  try {
    const buttons = document.getElementsByClassName('ytp-ad-skip-button-container');
    buttons[0].click();
  } catch(e) {
    ;
  }
  try {
    const closes = document.getElementsByClassName('ytp-ad-overlay-close-container');
    closes[0].click();
  } catch(e) {
    ;
  }
},1000);

// Consoleに貼り付けてください