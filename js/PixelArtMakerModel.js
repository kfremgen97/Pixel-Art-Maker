// Hold the state of the application
export const state = {
    _rows: 100,
    _columns: 100,
    _color: 'black',
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