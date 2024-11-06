const navLinks = document.querySelectorAll(' header nav  a');
const sections = document.querySelectorAll('section')

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
      })
    }
})};