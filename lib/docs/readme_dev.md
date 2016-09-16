## Break Outta This Dimension!

### Background

"Break Outta This Dimension" is a single-player game written with JavaScript and uses HTML5 Canvas. The player controls a paddle (actually a spaceship) at the bottom of the screen and moves it back and forth to keep the ball on the screen. The goal is to destroy the obstacles on the opposite side of the paddle by bouncing the ball on them. The obstacles disappear after getting hit a set amount of times, depending on the nature of the obstacle. Obstacles can also unleash an additional ball, a life-giving ball, or a contact grenade, which must be avoided as contact with the paddle will cause a loss of life. The player starts out with three lives.

The game will have the following elements:
1) landing page with instructions and a toggleable start
2) enter key toggles full screen
3) certain bricks require more than one hit to eliminate
4) obstacles can rain down additional balls, give life-giving orb, throw contact grenade

### Functionality & MVP  

In this game, the user will be able to:

- [ ] Start and pause the game
- [ ] Control the Breakout paddle with arrow keys or mouse
- [ ] Have three lives before losing
- [ ] Obstacles may "give back"

In addition, this project will include:

- [ ] A loading page that shows
- [ ] Pop ups that alert the player whether they've won or lost, then restarts the game
- [ ] A production Readme

### Wireframes

This app will consist of a single screen. The "m" (menu) key will pause the game and take the user back to the landing page. From there the player can re-read the instructions and/or resume the game.

![loading](lib/docs/wireframes/loading.png)

A single level of the game
![breakout](lib/docs/wireframes/breakout.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla `JavaScript` for overall structure, game logic, and DOM manipulations
- `HTML5 Canvas` rendering
- some `CSS` to style the backgrounds of the canvases

- `index.html` is the entry file
- `game.js` is the script will handle the logic for creating and updating the necessary elements and rendering them to the canvas.
- `balls.js`, `bricks.js`, `paddle.js`, and `utility.js` are scripts that contain the logic and rules for the the balls, bricks, and paddle in the game, and the utility script has some variables and the fullscreen function
- `application.css` contains the css styling for the canvases


### Implementation Timeline

**Day 1**: Display the ball, bricks, and paddle

**Day 2**: Make paddle respond to key presses, add lives

**Day 3**: Add full screen API, give random bricks different properties

**Day 4**: Create landing page, "m" toggles menu

### Bonus features

There are many levels and features that can be added.  Some anticipated updates are:

- [ ] Additional levels that have different combinations of aliens
- [ ] Sound effects, music, and adjustable volume
- [ ] More variety of brick "give-backs" (e.g. that change paddle size)
- [ ] Bricks that move
