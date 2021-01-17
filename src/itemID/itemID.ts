const { GraphQLScalarType } = require('graphql');

export const itemID = new GraphQLScalarType({
  name: 'itemID',
  description: 'Custom ID scalar',
  serialize(value) {
    let result;
    if (isNaN(Number(value))) result = value;
    else result = Number(value);
    return result;
  },
  parseValue(value) {
    let result;
    if (isNaN(Number(value))) result = value;
    else result = Number(value);
    return result;
  },
});
