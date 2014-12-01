Field = function() {};

Field.prototype.add = function(cell){
    Cells.insert({x: cell.x, y:cell.y, health: cell.health});
};

Field.prototype.deleteCell = function(cell){
    Cells.remove({x: cell.x, y:cell.y});
};
