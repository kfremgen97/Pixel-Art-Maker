// Pixel Art Maker class
class PixelArtMakerView {

    // Elements
    colorChanger = document.querySelector('.pixel-color');
    form = document.querySelector('.pixel-form');
    grid = document.querySelector('.pixel-grid');

    /**
     * Render the grid on screen
     * @param {number} rows - The rows in the grid
     * @param {number} columns - The columns in the grid
     */
    renderGrid(rows,columns){
        // Html string template
        let htmlGrid = '';

        // Loop over the rows
        for(let x=0 ; x<rows ; x++){
            // Add opening table row tag
            htmlGrid += `<tr class="pixel-grid__row">`
            //Loop over the columns
            for(let y= 0 ; y<columns ; y++){
                // Add the column to the row
                htmlGrid += `<td class="pixel pixel-grid__column" data-row="${x}" data-column="${y}"> </td>`
            }
            // Add the closing table row tag
            htmlGrid += `</tr>`;
        }

        // Replace the old grid with the new grid
        this.grid.innerHTML = htmlGrid;
    }

    /**
     * Render an error to the user on screen
     * @param {string} message - The error message that occurred
     */
    renderError(message){
        // Present the alert to the user
        alert(message);
    }


    /**
     * Update the dimensions of the grid
     * @callback updateDimensionsCallback
     * @param {number} rows - The rows of the grid
     * @param {number} columns - The columns of the grid
     *
     */

    /**
     * Add a listener for when the form is submitted
     * @param {updateDimensionsCallback} handler
     */
    addSubmissionHandler(handler) {
        this.form.addEventListener('submit', function (event) {
            // Prevent default actions
            event.preventDefault();
            // Get the key values form the form fields
            const formData = [...new FormData(event.target)];
            // Get the row and column values
            const rows = formData[0][1], columns = formData[1][1];
            // Call the handler
            handler(rows, columns);

        })
    }

    /**
     * Update the color of the pixels in the grid
     * @callback updateColorCallback
     * @param {string} color - The string representation of a hex color
     *
     */
    /**
     *Add a listener for when the color is changed in the color input.
     * @param {updateColorCallback} handler
     */
    addColorChangeHandler(handler){
        this.colorChanger.addEventListener('input',function(event){
            // Call the handler , passing in the value of the color upon change
            handler(event.target.value)
        })
    }

    /**
     * Fill the pixel color in the grid
     * @callback fillPixelCallback
     * @param {Element} element - The element that caused the event to fire
     *
     */
    /**
     *Add a listener for when an element in the grid is clicked
     * @param {fillPixelCallback} handler
     */
    addPixelHandler(handler){
        this.grid.addEventListener('click',function(event){
            // Call the handler, passing in the target that caused the event to fire
            handler(event.target);
        });
    }
}

// Export a new instance of the class
export default new PixelArtMakerView();


