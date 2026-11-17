let player = {
    _name: "Shadow",
    _level: 15,
    _experience: 850,
    _health: 75,
    _isOnline: true,

    get name() {
        if (this._name.length < 3) {
            return "Invalid name!";
        }
        return this._name;
    },

    get level() {
        if (this._level >= 10) {
            return "Advanced Player";
        } else if (this._level >= 5) {
            return "Intermediate Player";
        } else {
            return "Beginner Player";
        }
    },

    get status() {
        if (this._health === 0) {
            return "player is dead";
        } else if (this._health < 30) {
            return "Critical condition";
        } else {
            return "Player is healthy";
        }
    }
};

console.log(player.name);
console.log(player.level);
console.log(player.status);