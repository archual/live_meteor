Template.cell.helpers({
  cell: function() {

    console.log(this);//todo console

    var DY = this * 54;
    var cols = [];

    for(var i = 0; i < 10; i++) {
      var DX = i * 64;
      if(this % 2 == 1){
        DX = i * 64 + 32;
      }
      var x = [1 + DX, 30 + DX, 60 + DX];
      var y = [0 + DY, 15 + DY, 50 + DY, 65 + DY];
      cols[i] = {points: x[0] + ',' + y[2] + ' '
                + x[1] + ',' + y[3] + ' '
                + x[2] + ',' + y[2] + ' '
                + x[2] + ',' + y[1] + ' '
                + x[1] + ',' + y[0] + ' '
                + x[0] + ',' + y[1],
                fill: [234,234,234],
                id: i + this * 10 + 1,
                cell: 0
      };
    }

    return cols;
  }
});

//сюда будет приходить строка клеток.
//ее надо разделить на клетки и формировать элементы для отправки в шаблон.