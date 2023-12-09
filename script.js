function processName() {
  const userName = document.getElementById('userNameInput').value.trim();

  if (userName !== '') {
    localStorage.setItem('userName', userName);

    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.content-container').style.display = 'flex';
    document.querySelector('.welcome-container').style.display = 'flex';
    document.querySelector('.menu-container').style.display = 'flex';
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerText = `˚ʚWelcome, ${userName}ɞ˚`;

    // Set font size based on the length of the username
    welcomeMessage.style.fontSize = getFontSize(userName.length);

    console.log('Welcome', userName);
  }
}

function getFontSize(length) {
  if (length === 6) {
    return '34px';
  } else if (length === 5) {
    return '36px';
  } else if (length === 4) {
    return '38px';
  } else if (length === 3) {
    return '40px';
  } else if (length === 2) {
    return '40px';
  } else {
    return '45px';
  }
}

const storedUserName = localStorage.getItem('userName');
if (storedUserName) {
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.content-container').style.display = 'flex';
  document.querySelector('.welcome-container').style.display = 'flex';
  document.querySelector('.menu-container').style.display = 'flex';
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.innerText = `˚ʚWelcome back, ${storedUserName}ɞ˚`;
  // Set font size based on the length of the username
  welcomeMessage.style.fontSize = getFontSize(storedUserName.length);
}

document.getElementById('userNameInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        processName();
    }
});

function toggleTopNav() {
    const topNavLeft = document.querySelector('.topnav-left');
    const topNavRight = document.querySelector('.topnav-right');

    topNavLeft.classList.toggle('show');
    topNavRight.classList.toggle('show');
}

document.getElementById('homepaw').addEventListener('click', function() {
    toggleTopNav();
});

function navigateTo(url) {
  window.location.href = url;
}