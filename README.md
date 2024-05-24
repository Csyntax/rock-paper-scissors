# rock-paper-scissors
Rock, paper and scissors using JavaScript

# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game built using HTML, CSS, and JavaScript. The game allows the user to play against the computer. The first player to reach 5 wins the game. The winner is determined based on the classic Rock Paper Scissors rules.

## How to Play

1. Open the `index.html` file in your web browser.
2. Click on either "ROCK", "PAPER", or "SCISSORS" to make your choice.
3. The computer will randomly choose its move.
4. The result of each round will be displayed, along with the current score.
5. The first player to reach 5 wins the game and is declared the final winner.

## Technologies Used

- HTML
- CSS (Flexbox and Grid for layout)
- JavaScript (DOM manipulation)

## File Structure

- `index.html`: Main HTML file for the game.
- `styles.css`: CSS file for styling the game interface.
- `rockpaperscissors.js`: JavaScript file containing game logic.
- `README.md`: This README file providing information about the game.

## Additional Features

- Responsive design for playability on different devices.
- Reset button to start a new game.
- Final result display after the game is won.

## Changing Number of Wins

The game is set to end when one player reaches 5 wins. You can modify this by changing the `winningScore` variable in the `rockpaperscissors.js` file.

For example, to end the game at 10 wins, change:

```javascript
const winningScore = 5; // Game ends when a player reaches 5 wins

const winningScore = 10; // Game ends when a player reaches 10 wins


Similarly, you can set totalRounds to any desired number (e.g., 20, 30, etc.) to play more rounds.
```

## Author

- [ Csyntax ](https://github.com/csyntax)

## Acknowledgments

- This project is part of [The Odin Project](https://www.theodinproject.com/).
- Inspired by classic Rock Paper Scissors games.

Feel free to fork, modify, and improve this game as you wish. Enjoy playing Rock Paper Scissors!
