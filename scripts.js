  function openPopup(src) {
     const popup = document.getElementById('popup');
     const popupImg = document.getElementById('popupImg');
     popupImg.src = src;
     popup.style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }