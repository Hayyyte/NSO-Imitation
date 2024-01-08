const toggleButtons = document.querySelectorAll('.toggleButton');
const toggleButtonContents = document.querySelectorAll('.toggleButtonContent');

toggleButtons.forEach(function (toggleButton, index) {
  toggleButton.addEventListener('click', function () {
    const toggleButtonContent = toggleButtonContents[index];
    toggleButtonContent.style.display = (toggleButtonContent.style.display === 'none' || toggleButtonContent.style.display === '') ? 'block' : 'none';
  });
});
