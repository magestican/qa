const { buildSchema } = require('graphql');

const GraphlQlSchema = buildSchema(`
    type Query {
        homepage: Homepage
        faqs: [Faq]
    },
    type Homepage {
        heading: String
        subheading: String
        heroImageUrl: String
    },
    type Faq {
        title: String
        body: String
    }
`);


module.exports = {
    GraphlQlSchema
}