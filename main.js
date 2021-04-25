const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


const accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}

function validation() {
  const text = document.getElementById("email").value;
  const inputError = document.querySelector("#email");
  const errorText = document.querySelector("#errorText");

  var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regx.test(text)) {
    inputError.classList.add("error");
    errorText.classList.add("errorText");
  } else {
    inputError.classList.remove("error");
    errorText.classList.remove("errorText");
  }
}

const open_nav = document.querySelector('#open_nav');
const close_nav = document.querySelector('#close_nav');
const nav_modalo = document.getElementById('ham-nav-modal_container');
const logo = document.querySelector(".logo");

open_nav.addEventListener('click', () => {
  nav_modalo.classList.add('show');
  open_nav.style.visibility = "hidden";
  logo.style.visibility = "hidden";
});

close_nav.addEventListener('click', () => {
  nav_modalo.classList.remove('show');
  open_nav.style.visibility = "visible";
  logo.style.visibility = "visible";
});