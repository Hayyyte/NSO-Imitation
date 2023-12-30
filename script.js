document.addEventListener('DOMContentLoaded', function () {
    const draggableElements = document.querySelectorAll('.draggable');
    let offsetX, offsetY, isDragging = false, currentDraggable, maxZIndex = 1;

    function startDrag(e, element) {
        isDragging = true;
        currentDraggable = element;

        currentDraggable.style.zIndex = (++maxZIndex).toString();

        offsetX = e.clientX - currentDraggable.getBoundingClientRect().left;
        offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;

        currentDraggable.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    }

    function dragMove(e) {
        if (isDragging && currentDraggable) {
            currentDraggable.style.left = e.clientX - offsetX + 'px';
            currentDraggable.style.top = e.clientY - offsetY + 'px';
        }
    }

    function endDrag() {
        if (isDragging && currentDraggable) {
            isDragging = false;
            currentDraggable.style.cursor = 'grab';
            document.body.style.userSelect = 'auto';
        }
    }

    draggableElements.forEach(element => {
        element.addEventListener('mousedown', (e) => startDrag(e, element));
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', endDrag);
    });
});
