# Final Project — Flock Off!

<!-- Replace "Title" with the name of your project -->

---

### The Project

<Flock Off! is an interactive sheep-herding game where players control a sheepdog using their mouse to guide wandering sheep into a fenced enclosure. Instead of controlling the sheep directly, players must strategically position the dog to influence their movements. As the number of sheep increases with each stage, the game becomes increasingly chaotic and challenging. Set in a playful countryside environment, Flock Off! creates a lighthearted experience that tests players' patience, coordination and ability to keep their flock together.>

---

### Output

![screenshot](readme-assets/finalproject-image01)
![screenshot](readme-assets/finalproject-image02)
![screenshot](readme-assets/finalproject-image03)
![screenshot](readme-assets/finalproject-image04)

<!-- Drop a screenshot or GIF of your project.
     Got more to show? Add more images — let the work speak for itself.
     Save everything to a readme-assets/ folder inside this project folder. -->

[video01]()
[video02]()
[video03]()
[video04]()

<!-- Replace the link above with a URL to a screen recording or video of your final project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

<### A) Concept & Intent

My project is an interactive sheep-herding game where players control a dog to guide wandering sheep into a fenced area. I wanted to create a playful yet increasingly challenging experience that requires players to strategise and control their movements rather than simply move objects directly.

### 😎 Interaction Logic

The game uses mouse input, with the dog following the cursor's position. When the dog approaches a sheep within a certain distance, the sheep moves in the opposite direction. Players must therefore position the dog strategically to guide the sheep towards the enclosure.

### C) Technical Structure

The project utilises object-oriented programming, with a Sheep class managing each sheep's position, movement and behaviour. An array stores multiple sheep, while conditional statements and game states manage stage progression, completion and game-over conditions.

### D) Behaviour Over Time

The game progresses across three stages, with the number of sheep increasing at each stage. As sheep wander independently, players must manage multiple moving objects simultaneously. The game ends unsuccessfully if a sheep escapes the canvas.

### E) Aesthetic Decisions

I incorporated illustrated assets of sheep, a dog, trees and a house to establish a playful countryside setting. These visual elements make the interaction more intuitive, while creating a cohesive and immersive game environment.

### F) Iteration & Challenges

The project initially began as a burger-assembly game, where players pushed ingredients onto a plate using mouse movements. I realised that the repulsion mechanic could be more meaningfully applied to sheep herding. One significant challenge was balancing the sheep's independent wandering behaviour with their responsiveness to the dog. Through adjusting movement parameters and introducing progressive stages, I developed a more engaging and purposeful gameplay experience.

>

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ Features
     A short list of what your project does.
     - Responds to mouse position and velocity
     - Generates sound based on particle density

     ### 🔍 Code Structure
     How are your files organised?
     - `sketch.js` — main setup and draw loop
     - `Agent.js` — autonomous agent class
     - `assets/` — images and sounds

     ### 🛠️ Hardware (if applicable)
     List any physical components used.
     - Arduino Uno
     - Sensor type and model

     ### 🧩 Something I'm Proud Of
     A snippet, a decision, a moment where it all came together.
     ```js
     // your code here
     ```

     ### 🔗 References
     Tutorials, libraries, artworks, or research that informed your project.
     ───────────────────────────────────────────────────── -->
