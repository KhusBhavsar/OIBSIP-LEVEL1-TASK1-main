const sec = document.getElementById("sec");

window.addEventListener('scroll',()=>{

    if (window.scrollY >= 50) {
        sec.classList.add('change');
      } else {
        sec.classList.remove('change');
      }
});

function openNav() {
  document.getElementById("sidenav").style.width = "50%";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0%";
}