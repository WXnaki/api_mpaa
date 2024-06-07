const mongoose = require('mongoose');

const snorlaxSchema = new mongoose.Schema({

nome: {
type: String,
required: true,
},

tamanho: {
type: String,
required: true,
},

peso: {
type: String,
required: true,
},

idade: {
type: String,
required: true,
},

foto: {
type: String,
required: true,
},

});

const Snorlax = mongoose.model('Snorlax', snorlaxSchema);

module.exports = Snorlax;