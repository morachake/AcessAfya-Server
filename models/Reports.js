const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    month: {
        type: 'String',
    },
    patients: {
        type: 'String',
    },
    revenue: {
        type: 'String',
    },
});

module.exports = mongoose.model('Report',ReportSchema)