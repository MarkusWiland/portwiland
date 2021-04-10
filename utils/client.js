import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: process.env.SPACEID,
  accessToken: process.env.ACCESSTOKEN,
});
