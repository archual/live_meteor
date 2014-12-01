var cells = [];
var grid = 10;

var field = new Field(grid);


Meteor.methods({
    addCell: function (cell) {
        var x = cell.id % 10;
        var y = (cell.id - x) / 10 + 1;

        field.add(new GeneralCell({x:x, y:y}));
    }
});

Meteor._debug(field);

//var cell = new GeneralCell({x:3, y:3});
//var cell1 = new GeneralCell({x:2, y:3});
//var cell2 = new GeneralCell({x:3, y:2});

//field.add(cell);
//field.add(cell1);
//field.add(cell2);

//setInterval(function(){console.clear();field.draw()}, 1000);
