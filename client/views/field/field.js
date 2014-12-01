var rows_test = [1, 2];
Template.field.helpers({
  rows: function(){
    var arr = [];
    for(var i=0; i < 10; i++){
      arr[i] = [1, 2, 3, 4, 5];
    }
    return arr;
  }
})
//тут тянем коллекцию и формируем данные в строки (по 10 элементов в строку к примеру)