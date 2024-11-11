

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
  cursorPointer.style.top = e.clientY + "px";
  cursorPointer.style.left = e.clientX + "px";
});

const addGrowEffect = () => cursor.classList.add('clickable');
const removeGrowEffect = () => cursor.classList.remove('clickable');
const clickableElements = document.querySelectorAll(".clickable");
clickableElements.forEach((element) => {
  element.addEventListener('mouseenter', addGrowEffect);
  element.addEventListener('mouseleave', removeGrowEffect);
});