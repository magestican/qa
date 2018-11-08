const { faqs, homepage } = require('../db/cmsData.json');
var GraphlQlRoot = {
    homepage: () => homepage,
    faqs: () => faqs
};

module.exports = {
    GraphlQlRoot
}