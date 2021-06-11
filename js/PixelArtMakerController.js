// Imports
import {state} from './PixelArtMakerModel.js';
import pixelArtMakerView from './PixelArtMakerView.js';

/**
 *Update the dimensions of the grid in the model and then the view
 * @param {number} rows - The number of rows for the grid
 * @param {number} columns - The number of columns for the grid
 */
const updateDimensions = function(rows,columns){
    //Validate
    try {
        if (rows <= 0 || columns <= 0) throw new Error('Invalid number');

        // Update the state
        state.updateGrid(rows,columns);
        console.log(state.getGrid());

        // render the view for updated state
        pixelArtMakerView.renderGrid(...state.getGrid())
    }catch(error){
        // Console the error
        console.error(error);
        // Send the error to the view
        pixelArtMakerView.renderError(error.message);

    }
};

/**
 *Update the color in the model
 * @param {string} color - String representation of a hex color
 */
const updateColor = function(color){
    console.log(color);
    // Update the color in the state
    state.updateColor(color);
};

/**
 * Fill in the background of the element
 * @param {Element} element - The element that caused the event to fire
 */
const fillInPixel = function(element){
    // Check to make sure a user clicked on a pixel in the grid
    // The pixels have a class name of pixel, if the element doesnt have the class name return
    if(!element.classList.contains('pixel')) return;

    // Set the background color of the element
    element.style.backgroundColor = state.getColor();
};

// Add the event listeners
pixelArtMakerView.addColorChangeHandler(updateColor);
pixelArtMakerView.addSubmissionHandler(updateDimensions);
pixelArtMakerView.addPixelHandler(fillInPixel);

// Draw the grid when the script is executed
pixelArtMakerView.renderGrid(...state.getGrid());