const mongoose = require('mongoose');

// Define the schema for the 'website_terms' model
const websiteTermsSchema = new mongoose.Schema({
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



// websiteTermsSchema.methods.toJSON = function () {
//     const webterm = this;
//     const webtermObject = webterm.toObject();
//     const configureObject = deleteJsonEntries(webtermObject, ["createdAt", "updatedAt", "__v"]);
//     return configureObject;
// };

// Create the 'website_terms' model
const WebsiteTerms = mongoose.model('website_terms', websiteTermsSchema);

module.exports = WebsiteTerms;
