const mongoose = require('mongoose');

// Define the schema for the 'website_terms' model
const PrivacySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        version: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    });



// PrivacySchema.methods.toJSON = function () {
//     const privacy = this;
//     const privacyObject = privacy.toObject();
//     const configureObject = deleteJsonEntries(privacyObject, ["createdAt", "updatedAt", "__v"]);
//     return configureObject;
// };

// Create the 'website_terms' model
const WebsiteTerms = mongoose.model('privacys', PrivacySchema);

module.exports = WebsiteTerms;
