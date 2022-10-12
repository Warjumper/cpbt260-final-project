const toggleButton = document.getElementsByClassName ('toggle-button') [0]
const navbarLinks = document.getElementsByClassName ('navbar-links') [0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// const current = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';