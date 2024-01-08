document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class ".draggable"
    const draggableElements = document.querySelectorAll('.draggable');
  
    // Find the element with the highest z-index
    let maxZIndex = -1;
    let focusedElement = null;
  
    draggableElements.forEach(element => {
      // Remove the class ".focused" from all elements
      element.classList.remove('focused');
  
      const zIndex = parseInt(window.getComputedStyle(element).zIndex, 10);
      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
        focusedElement = element;
      }
    });
  
    // Add the class ".focused" to the element with the highest z-index
    if (focusedElement) {
      focusedElement.classList.add('focused');
    }
  });
  