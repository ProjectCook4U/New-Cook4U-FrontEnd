const mongoose = require('mongoose');
exports.connect = () => {
    mongoose.connect('mongodb://52.91.119.217:8105/cook4u')
    .then(() => console.log('Database is connected'))
    .catch((e) => console.log(e));
};