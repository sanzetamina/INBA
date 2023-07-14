(() => {
  const { renderer } = require("./src/renderer");
  const container = document.getElementById("container");
  const instance = renderer({
    minScale: 0.1,
    maxScale: 30,
    element: container.children[0],
    scaleSensitivity: 50,
  });

  let isDragging = false;
  let startX;
  let startY;

  container.addEventListener("mousedown", (event) => {
    if (event.button !== 0) {
      return; // Exit if the mouse button is not the primary (left) button
    }
    event.preventDefault();
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
  });

  container.addEventListener("mousemove", (event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    const moveX = event.clientX - startX;
    const moveY = event.clientY - startY;
    startX = event.clientX;
    startY = event.clientY;
    instance.panBy({ originX: moveX, originY: moveY });
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("wheel", (event) => {
    event.preventDefault();
    instance.zoom({
      deltaScale: Math.sign(event.deltaY) > 0 ? -1 : 1,
      x: event.pageX,
      y: event.pageY,
    });
  });

  container.addEventListener("dblclick", () => {
    instance.panTo({ originX: 0, originY: 0, scale: 1 });
  });
})();
