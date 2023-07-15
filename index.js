(() => {
  const { renderer } = require("./src/renderer");
  const characters = require("./data/characters.js"); // array of characters and their characteristics

  const container = document.getElementById("container");
  const muralImage = container.children[0];

  const instance = renderer({
    minScale: 0.1,
    maxScale: 30,
    element: muralImage,
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

    updateHighlightBoxes(); // Update highlight boxes during pan
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

    updateHighlightBoxes(); // Update highlight boxes during zoom
  });

  container.addEventListener("dblclick", () => {
    instance.panTo({ originX: 0, originY: 0, scale: 1 });
  });

  muralImage.addEventListener("mousemove", handleMouseMove);
  muralImage.addEventListener("click", handleClick);
  muralImage.addEventListener("mouseleave", handleMouseLeave);

  function handleMouseMove(event) {
    const mouseX = event.clientX - container.getBoundingClientRect().left;
    const mouseY = event.clientY - container.getBoundingClientRect().top;

    console.log("Mouse move at: ", mouseX, " - ", mouseY);

    characters.forEach((character) => {
      const isHovered =
        mouseX >= character.x &&
        mouseX <= character.x + character.width &&
        mouseY >= character.y &&
        mouseY <= character.y + character.height;

      let highlightElement = document.getElementById(
        `highlight-${character.name}`
      );

      character.box = highlightElement;

      if (!highlightElement) {
        highlightElement = document.createElement("div");
        highlightElement.id = `highlight-${character.name}`;
        highlightElement.className = "highlight";
        container.appendChild(highlightElement);
      }

      if (isHovered) {
        highlightElement.style.display = "block";
        highlightElement.style.top = `${character.y}px`;
        highlightElement.style.left = `${character.x}px`;
        highlightElement.style.width = `${character.width}px`;
        highlightElement.style.height = `${character.height}px`;
      } else {
        highlightElement.style.display = "none";
      }
    });
  }

  function handleClick(event) {
    const mouseX = event.clientX - muralImage.getBoundingClientRect().left;
    const mouseY = event.clientY - muralImage.getBoundingClientRect().top;

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
    }
  }

  function showFloatingWindow(character, mouseX, mouseY) {
    const floatingWindow = document.createElement("div");
    floatingWindow.className = "floating-window";
    floatingWindow.style.left = `${mouseX}px`;
    floatingWindow.style.top = `${mouseY}px`;

    const content = `
      <h3>${character.name}</h3>
      <p>${character.description}</p>
    `;
    floatingWindow.innerHTML = content;

    document.body.appendChild(floatingWindow);
  }

  function handleMouseLeave() {
    characters.forEach((character) => {
      const characterElement = document.getElementById(character.name);
      if (characterElement) {
        characterElement.classList.remove("highlight");
      }
    });

    const floatingWindow = document.querySelector(".floating-window");
    if (floatingWindow) {
      floatingWindow.remove();
    }
  }

  function updateHighlightBoxes() {
    const { x, y, scale } = instance;

    console.log(
      "updateHighlightBoxes by: x=",
      x,
      " y=",
      y,
      " and scale= ",
      scale
    );

    characters.forEach((character) => {
      const { x: characterX, y: characterY, width, height, box } = character;
      const transformedX = (characterX + x) * scale;
      const transformedY = (characterY + y) * scale;
      const transformedWidth = width * scale;
      const transformedHeight = height * scale;

      if (box) {
        // Use CSS transform to apply translation and scaling
        box.style.transform = `translate(${transformedX}px, ${transformedY}px) scale(${scale})`;
        // Set the transform origin to the top left corner
        box.style.transformOrigin = "0 0";
        // Set the width and height of the box without scaling
        box.style.width = `${transformedWidth}px`;
        box.style.height = `${transformedHeight}px`;
      }
    });
  }
})();
