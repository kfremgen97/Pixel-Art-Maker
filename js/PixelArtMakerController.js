// Imports
import {state} from './PixelArtMakerModel.js';
import pixelArtMakerView from './PixelArtMakerView.js';

// Update the dimensions of the grid
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

// Update the color for the pixels in the grid
const updateColor = function(color){
    console.log(color);
    // Update the color in the state
    state.updateColor(color);
};

// Fill in the pixels of the grid
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