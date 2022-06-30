const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: {
        type: 'String',
    },
    efficiency: {
        type: 'String',
    },
    efficiencydelta: {
        type: 'String',
    },
    npsdelta: { 
        type: 'String',
    },
    reportedissues: {
        type: 'String',
    }
});

module.exports = mongoose.model('Staff',StaffSchema)