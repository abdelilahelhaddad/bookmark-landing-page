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


const accordion = document.querySelectorAll(".accordion");
const svg = document.querySelector("svg");
const accordionBody = document.querySelector(".accordion-body");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    svg.classList.toggle('active');
    accordionBody.classList.toggle('active');
  })
}