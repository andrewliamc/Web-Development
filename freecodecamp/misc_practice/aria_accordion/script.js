const button = document.getElementById('accordionBtn');
const content = document.getElementById('accordionContent');

button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !expanded);
  content.hidden = expanded;
});
