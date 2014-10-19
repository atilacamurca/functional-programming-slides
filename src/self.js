'use strict';

function User() {
    this.name = '';
    this.uid = 0;
}

User.prototype.get = function(fn) {
    return fn(this);
};

var user = new User();
user.name = 'Átila';
var name = user.get(function(self) {
    return self.name;
});
console.log('user.name: ' + user.name);
console.log('name: ' + name);
