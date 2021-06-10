// Imports
import {state} from './PixelArtMakerModel.js';
import pixelArtMakerView from './PixelArtMakerView.js';

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


// Add the event listeners
pixelArtMakerView.addSubmissionHandler(updateDimensions);