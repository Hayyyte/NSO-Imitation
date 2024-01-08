document.addEventListener('DOMContentLoaded', function () {
    const draggableElements = document.querySelectorAll('.window-header');
    let offsetX, offsetY, isDragging = false, currentDraggable, maxZIndex = 1;

    function startDrag(e, element) {
        isDragging = true;
        currentDraggable = element.closest('.draggable');

        currentDraggable.style.zIndex = (++maxZIndex).toString();

        offsetX = e.clientX - currentDraggable.getBoundingClientRect().left;
        offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;

        currentDraggable.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    }

    function dragMove(e) {
        if (isDragging && currentDraggable) {
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            const containerRect = document.querySelector('.draggable-container').getBoundingClientRect();

            newLeft = Math.max(containerRect.left, newLeft);
            newTop = Math.max(containerRect.top, newTop);
            newLeft = Math.min(containerRect.right - currentDraggable.offsetWidth, newLeft);
            newTop = Math.min(containerRect.bottom - currentDraggable.offsetHeight, newTop);

            currentDraggable.style.left = newLeft + 'px';
            currentDraggable.style.top = newTop + 'px';
        }
    }

    function endDrag() {
        if (isDragging && currentDraggable) {
            isDragging = false;
            currentDraggable.style.cursor = 'auto';
            document.body.style.userSelect = 'none';
        }
    }

    draggableElements.forEach(element => {
        element.addEventListener('mousedown', (e) => {
            startDrag(e, element);
        });
    });
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', endDrag);
});
