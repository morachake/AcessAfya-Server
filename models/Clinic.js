const mongoose = require('mongoose');

const ClinicSchema = new mongoose.Schema({
    name: {
        type: 'String',
    },
    issues: {
        type: 'String',
    },
    status: {
        type: 'String',
        enum: [
            'Opened Late',
            'Delay',
            'Checkin',
            "waste",
        ]
    },
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Staff'
    }
});

module.exports = mongoose.model('Clinic',ClinicSchema)