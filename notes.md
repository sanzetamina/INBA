Hi, I have an idea for a website.
I recently visited the INBA or national museum of art in Mexico City.
I loved the mural exposed from Diego Rivera.

I would like to create a website, that as the page loads, the whole page/site is Diego Rivera’s mural, and with the mouse you can move around up, down, left and right. The image would in high resolution.
As you know, in the mural there is a bunch of people pictured, Diego himself included, and his life’s love Frida Kahlo. Now, on the website, when hovering the mouse over each character pictured in the mural, the person would be somewhat highlighted, and when clicked, a description would be shown on a floating window.

As you can see, the website would be quite simple:

- a high res image in the background that can be moved around, zoomed in and out,
- a mechanism for which, each character can be highlighted
- when a character is clicked, a floating window shows explaining the story behind each character

Can you please help me figuring out what would be the best approach and tech stack to make this real?
Whether it’s with no-code or coding (I can develop). If programming option, what stack would best fit this? In terms of ease and speed.

Please recommend what you think is best.
Thank you.

—

Creating the website you described would require some programming knowledge, as it involves custom interactions and functionality. However, I can certainly guide you through the process and suggest a suitable tech stack to bring your idea to life.
Here's a recommended approach:
Front-end Development: Since you want a high-resolution image background with interactive elements, it would be best to use HTML, CSS, and JavaScript to build the front-end of your website. These technologies are widely used and offer the flexibility and control you need.
Responsive Design: Ensure your website is responsive, meaning it adapts to different screen sizes (e.g., desktop, tablet, mobile) for a seamless user experience.
Image Handling: Optimize your high-resolution image to ensure it loads quickly without compromising quality. You can use image compression techniques or consider using a content delivery network (CDN) to speed up image delivery.
Interactivity and Navigation: Implement mouse movement and scrolling to allow users to navigate the mural. JavaScript libraries like Three.js or PixiJS can help with creating interactive experiences.
Highlighting Characters: Use JavaScript to detect mouse hover events on different character areas within the mural. When the user hovers over a character, you can change the appearance (e.g., brightness, color) to highlight it. You can achieve this by mapping the coordinates of each character area and applying the necessary CSS changes dynamically.
Floating Windows: When a character is clicked or hovered over, you can display a floating window with a description. You can achieve this using JavaScript to create and position HTML elements dynamically, or by utilizing libraries like React or Vue.js to manage the UI components.
Backend (Optional): If you plan to store and retrieve character information from a database, or if you want to add user authentication, you may need to develop a backend. For a simple website like this, you can use serverless technologies like Firebase or Netlify Functions for easy integration.
Deployment: Once you've built the website, you can host it on platforms like Netlify, Vercel, or GitHub Pages for simplicity and ease of deployment.

Remember, while this project can be accomplished using coding, it will require some development effort. If you prefer a no-code solution, you might explore website builders like Wix or Squarespace. However, they may have limitations in terms of customization and interactivity.
Feel free to ask if you have any further questions or need additional assistance!

Certainly! Here are some resources to help you get started with front-end web development and the technologies mentioned earlier:

HTML and CSS:
• Mozilla Developer Network (MDN) - HTML
https://chat.openai.com/c/248e4b68-04b7-40c8-a6da-314513443790#:~:text=Mozilla%20Developer%20Network%20(MDN)%20%2D%20HTML
• MDN - CSS
https://developer.mozilla.org/en-US/docs/Web/CSS
• freeCodeCamp HTML and CSS Course
https://www.freecodecamp.org/learn/responsive-web-design/
JavaScript:
• MDN - JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript

    •	freeCodeCamp JavaScript Course
    	https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

Three.js:
• Three.js Fundamentals
https://threejsfundamentals.org/

    •	Official Three.js Examples
    	https://threejs.org/examples/

PixiJS:
• PixiJS Examples
https://pixijs.io/examples/
React:
• Official React Tutorial
https://reactjs.org/tutorial/tutorial.html

    •	React - The Complete Guide (Udemy)
    	https://www.udemy.com/course/react-the-complete-guide-incl-redux/

    •	React for Beginners (Scrimba)
    	https://scrimba.com/learn/learnreact

Vue.js:
• Vue.js Guide
https://v3.vuejs.org/guide/introduction.html

    •	Vue.js - The Complete Guide (Udemy)
    	https://v3.vuejs.org/guide/introduction.html

Additionally, platforms like Udemy, Coursera, and Codecademy offer comprehensive online courses on web development, HTML/CSS, JavaScript, and popular frameworks like React and Vue.js. You can search for specific courses that suit your learning style and requirements.
For video tutorials and guides, you can also explore platforms like YouTube and freeCodeCamp's YouTube Channel, which provide a wide range of programming tutorials and walkthroughs.
Remember, practice is key to mastering web development. As you progress, you can search for specific tutorials and resources tailored to the topics and functionalities you want to implement in your project.
Happy learning, and don't hesitate to reach out if you have any more questions!
