// Pixel Art Maker class
class PixelArtMakerView {
    // elements
    form = document.querySelector('.pixel-form');

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

    renderGrid(rows,columns){
        console.log(rows,columns);
    }

    // Render error
    renderError(message){
        // Present the alert to the user
        alert(message);
    }
}

export default new PixelArtMakerView();


