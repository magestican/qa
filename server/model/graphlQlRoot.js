const { faqs, homepage } = require('../db/cmsData.json');
var root = {
    homepage: () => homepage,
    faqs: () => faqs
};

module.exports = {
    root
}