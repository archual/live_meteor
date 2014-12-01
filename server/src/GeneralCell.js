GeneralCell = function(options) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this._health = options.health || 100;//todo ошибка, сейчас жизнь общая на всех, нужно разделить

    this._run();
};

/**
 * Приватный метод для проверки живая клетка или нет
 * @returns {boolean}
 * @private
 */
GeneralCell.prototype._isLiving = function(){
    return this._health > 0;
};

/**
 * Жизненый цикл клетки
 * @returns {number}
 * @private
 */
GeneralCell.prototype._life = function(){
    if (this._isLiving()) {
        return this._health -= 5;
    }
    else{
        clearInterval(this._cycle);
        //delete cells[self.x + (grid * self.y)];
        Meteor._debug('I am dead!');
    }
};

/**
 * Возвращает количество хитпоинтов клетки
 * @returns {health|*|GeneralCell.health|number}
 */
GeneralCell.prototype.getHealth = function() {
    return this._health;
};
/**
 * Старение клетки, вызываеться сразу при создании клетки
 * @private
 */
GeneralCell.prototype._run = function(){
    var self = this;
    this._cycle = setInterval(function() {
        self._life();
    }, 1000);
};