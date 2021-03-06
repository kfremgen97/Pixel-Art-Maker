// Hold the state of the application
// Export the state object to accessible throughout application
export const state = {
    _rows: 10,
    _columns: 10,
    _color: '#000000',
    getGrid: function(){
        return [this._rows,this._columns];
    },
    updateGrid: function(rows,columns){
        this._rows = rows;
        this._columns = columns;
    },
    getColor: function(){
        return this._color;
    },
    updateColor: function(color){
        this._color = color;
    }
};