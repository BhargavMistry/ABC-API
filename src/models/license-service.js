const mongoose = require('mongoose');

// Define the schema for the 'website_terms' model
const LicenseServiceSchema = new mongoose.Schema({
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



// LicenseServiceSchema.methods.toJSON = function () {
//     const license = this;
//     const licenseObject = license.toObject();
//     const configureObject = deleteJsonEntries(licenseObject, ["createdAt", "updatedAt", "__v"]);
//     return configureObject;
// };

// Create the 'website_terms' model
const WebsiteTerms = mongoose.model('license_services', LicenseServiceSchema);

module.exports = WebsiteTerms;
