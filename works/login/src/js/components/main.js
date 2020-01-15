// tab login
(function() {
  let firstTabBtn = document.getElementById('sin-up-btn');
  let secondTabBtn = document.getElementById('sin-in-btn');
  let firstTabDesc = document.getElementById('sin-up-desc');
  let secondTabDesc = document.getElementById('sin-in-desc');

  firstTabBtn.onclick = function() {
    firstTabBtn.classList.add('active');
    firstTabDesc.classList.add('active');
    secondTabBtn.classList.remove('active');
    secondTabDesc.classList.remove('active');
  }

  secondTabBtn.onclick = function() {
    firstTabBtn.classList.remove('active');
    firstTabDesc.classList.remove('active');
    secondTabBtn.classList.add('active');
    secondTabDesc.classList.add('active');
  }
})();
