/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

// Your code here.
const whiteCell = "#";
const blackCell = " ";
const size = 8;
for (let i=1;i<=size;i++){
    let row = "";
    if (i%2!=0) {
        for (let j=1;j<=size;j++){
            if (j%2!=0) {
                row+=whiteCell;
            } else {
                row+=blackCell;
            }        
        }
    } else {
        for (let j=1;j<=size;j++){
            if (j%2!=0) {
                row+=blackCell;
            } else {
                row+=whiteCell;
            }        
        }
    }
    console.log(row);    
}
