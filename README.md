# Drum Kit and JavaScript Tasks

This repository contains a simple Drum Kit web application and a collection of JavaScript task snippets.

## Projects

### 1. Drum Kit
A web-based drum kit that allows users to play different drum sounds by clicking on buttons or pressing corresponding keys on their keyboard.

- **Keys:** `w`, `a`, `s`, `d`, `j`, `k`, `l`
- **Features:**
  - Responsive design.
  - Button animations.
  - Sound effects for each drum.

To run the Drum Kit, open `DrumKit/index.html` in your web browser.

### 2. JavaScript Tasks
A collection of common JavaScript exercises and their solutions, located in `task.js`.

- **Task 1:** Dice rolling simulation.
- **Task 2:** Number guessing game logic.
- **Task 3:** Grade calculation.
- **Task 4:** Simple shopping cart array operations.
- **Task 5:** Finding the largest number in an array.
- **Task 6:** Countdown using a `while` loop.
- **Task 7:** Filtering even numbers from an array.
- **Task Bonus:** Simple authentication logic.

To run the tasks, use Node.js:
```bash
node task.js
```

## Improvements Made
- Renamed the project directory from `Durm` to `DrumKit` to fix a typo.
- Refactored `DrumKit/index.js` to use a more maintainable mapping object for sounds.
- Added accessibility `aria-label` attributes to drum buttons.
- Enabled the 'l' drum button.
- Fixed unreachable code and improved code quality in `task.js`.
- Standardized formatting and indentation.
