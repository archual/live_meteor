GeneralCell = function(options) {
    var self = this;
    var health = options.health || 100;
    var cycle = setInterval(life, 1000);

    self.x = options.x || 0;
    self.y = options.y || 0;
    self.health = options.health || 100;

    function isLiving() {
        return health > 0;
    }

    function life() {
        if (isLiving()) {
            Meteor._debug('I am live!');
            return health -= 5;
        }
        clearInterval(cycle);
        //delete cells[self.x + (grid * self.y)];
        Meteor._debug('I am dead!');
    }

    self.getHealth = function() {
        return health;
    };
};
