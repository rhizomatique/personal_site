function openNav() {
  document.getElementById("content").style.marginLeft = "25%";
  document.getElementById("menu").style.width = "25%";
  document.getElementById("menu").style.display = "block";
  document.getElementById("onav").style.display = 'none';
}
function closeNav() {
  document.getElementById("content").style.marginLeft = "0%";
  document.getElementById("menu").style.display = "none";
  document.getElementById("onav").style.display = "inline-block";
}
