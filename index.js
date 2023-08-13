(() => {
  const { renderer } = require("./src/renderer");
  const characters = require("./data/characters.js");

  const container = document.getElementById("container");
  let containerWidth = container.clientWidth;
  let containerHeight = container.clientHeight;

  const instance = renderer({
    minScale: 0.1,
    maxScale: 30,
    element: container,
    scaleSensitivity: 50,
  });

  let isDragging = false;
  let startX;
  let startY;

  function calculateMousePosition(event) {
    const rect = container.getBoundingClientRect();
    const scale = instance.getScale();

    let mouseX, mouseY;

    mouseX = ((event.clientX - rect.left) * 100) / (containerWidth * scale);
    mouseY = ((event.clientY - rect.top) * 100) / (containerHeight * scale);

    return { mouseX, mouseY };
  }

  function createHighlightElement(character) {
    let highlightElement = document.getElementById(
      `highlight-${character.name.english}`
    );
    if (!highlightElement) {
      highlightElement = document.createElement("div");
      highlightElement.id = `highlight-${character.name.english}`;
      highlightElement.className = "highlight";
      container.appendChild(highlightElement);
    }
    return highlightElement;
  }

  function positionHighlightBoxes(mousePosition) {
    characters.forEach((character) => {
      const isHovered =
        mousePosition.mouseX >= character.x &&
        mousePosition.mouseX <= character.x + character.width &&
        mousePosition.mouseY >= character.y &&
        mousePosition.mouseY <= character.y + character.height;
      const highlightElement = createHighlightElement(character);

      if (isHovered) {
        highlightElement.style.display = "block";
        highlightElement.style.top = `${character.y}%`;
        highlightElement.style.left = `${character.x}%`;
        highlightElement.style.width = `${character.width}%`;
        highlightElement.style.height = `${character.height}%`;
      } else {
        highlightElement.style.display = "none";
      }
    });
  }

  function handleMouseMove(event) {
    const { mouseX, mouseY } = calculateMousePosition(event);

    console.log(
      "Mouse move at: x=",
      mouseX.toFixed(2),
      "% & y=",
      mouseY.toFixed(2),
      "%"
    );

    const currentMousePosition = { mouseX, mouseY };
    positionHighlightBoxes(currentMousePosition);
  }

  function handleResize() {
    // Update container width and height after resizing
    containerWidth = container.clientWidth;
    containerHeight = container.clientHeight;

    // Re-calculate the mouse position and reposition highlight boxes
    const currentMousePosition = { mouseX: 0, mouseY: 0 };
    if (characters.length > 0) {
      const character = characters[0];
      const highlightElement = createHighlightElement(character);
      currentMousePosition.mouseX = parseFloat(highlightElement.style.left);
      currentMousePosition.mouseY = parseFloat(highlightElement.style.top);
    }
    positionHighlightBoxes(currentMousePosition);
  }

  // Add this line to call positionHighlightBoxes initially
  positionHighlightBoxes({ mouseX: 0, mouseY: 0 });

  window.addEventListener("resize", handleResize);

  container.addEventListener("mousedown", (event) => {
    if (event.button !== 0) {
      return;
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

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("click", handleClick);
  container.addEventListener("mouseleave", handleMouseLeave);

  function handleClick(event) {
    const { mouseX, mouseY } = calculateMousePosition(event);
    const scale = instance.getScale();
    const pan = instance.getPan();

    console.log(
      "Mouse CLICK at: x=",
      mouseX.toFixed(2),
      "% & y=",
      mouseY.toFixed(2),
      "%"
    );
    console.log("Scale: ", scale);
    console.log("Pan: ", pan);

    const clickedCharacter = characters.find(
      (character) =>
        mouseX >= character.x &&
        mouseX <= character.x + character.width &&
        mouseY >= character.y &&
        mouseY <= character.y + character.height
    );

    if (clickedCharacter) {
      console.log("Character clicked!");
      showFloatingWindow(clickedCharacter, event.clientX, event.clientY);
    } else {
      console.log("No character clicked!");
    }
  }

  function showFloatingWindow(character, mouseX, mouseY) {
    const currentScale = instance.getScale();

    const adjustedMouseX = mouseX / currentScale;
    const adjustedMouseY = mouseY / currentScale;

    const floatingWindow = document.createElement("div");
    floatingWindow.className = "floating-window";
    floatingWindow.style.left = `${adjustedMouseX}px`;
    floatingWindow.style.top = `${adjustedMouseY}px`;

    const content = `
      <h3>${character.name.english}</h3>
      <p>${character.description.english}</p>
    `;
    floatingWindow.innerHTML = content;

    document.body.appendChild(floatingWindow);
  }

  function handleMouseLeave() {
    characters.forEach((character) => {
      const highlightElement = document.getElementById(
        `highlight-${character.name.english}`
      );
      if (highlightElement) {
        highlightElement.style.display = "none";
      }
    });

    const floatingWindow = document.querySelector(".floating-window");
    if (floatingWindow) {
      floatingWindow.remove();
    }
  }
})();
