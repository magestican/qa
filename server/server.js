const express = require('express');
const express_graphql = require('express-graphql');
const { GraphlQlRoot } = require('./model/graphlQlRoot');
const { GraphlQlSchema } = require('./model/graphlQlSchema');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema: GraphlQlSchema,
    rootValue: GraphlQlRoot,
    graphiql: true
}));

app.listen(4000, () => console.log('GraphQL server running localhost:4000/graphql'));