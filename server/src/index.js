const path = require('path');
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const POSTS = [
  { author: 'John Doe', body: 'Hello world' },
  { author: 'Jane Doe', body: 'Hi, planet!' }
];

const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

const staticFiles = express.static(path.join(__dirname, '../../client/build'));

const mapPost = (post, id) => post && { id, ...post };

const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id)
};

const app = express();

app.use(cors());
app.use(staticFiles);
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);
// app.use('/api');
app.use('/*', staticFiles);

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
