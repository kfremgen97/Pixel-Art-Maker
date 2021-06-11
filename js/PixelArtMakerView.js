// Pixel Art Maker class
class PixelArtMakerView {

    // elements
    colorChanger = document.querySelector('.pixel-color');
    form = document.querySelector('.pixel-form');
    grid = document.querySelector('.pixel-grid');

    // Render grid
    renderGrid(rows,columns){

        let htmlGrid = '';

        // Loop over the rows
        for(let x=0 ; x<rows ; x++){
            // Add opening table row tag
            htmlGrid += `<tr class="pixel-grid__row">`
            //Loop over the columns
            for(let y= 0 ; y<columns ; y++){

                // Add the column to the row
                htmlGrid += `<td class=pixel-grid__column data-row="${x}" data-column="${y}"> </td>`

            }

            // Add the closing table row tag
            htmlGrid += `</tr>`;
        }

        // Replace the old grid with the new grid
        this.grid.innerHTML = htmlGrid;


    }

    // Render error
    renderError(message){
        // Present the alert to the user
        alert(message);
    }

    // Add form submit listener
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

    addColorChangeHandler(handler){
        this.colorChanger.addEventListener('input',function(event){

            // Call the handler , passing in the value of the color upon change
            handler(event.target.value)
        })
    }
}


export default new PixelArtMakerView();


