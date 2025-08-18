import { blogModule } from "../modules/Day-1-Blog/index.js";
import { messageModule } from "../modules/message/index.js";

export const resolvers = {
  Query: {
    ...blogModule.Query,
    ...messageModule.query,
  },
  Mutation: {
    ...blogModule.Mutation,
    ...messageModule.mutaion
  },
   User: {
    posts: (parent) => {
      return posts.filter(post => post.authorId === parent.id);
    },
    comments: (parent) => {
      return comments.filter(comment => comment.userId === parent.id);
    },
  },

  Post: {
    author: (parent) => users.find(user => user.id === parent.authorId),
    comments: (parent) => comments.filter(comment => comment.postId === parent.id),
  },

  Comment: {
    user: (parent) => users.find(user => user.id === parent.userId),
    post: (parent) => posts.find(post => post.id === parent.postId),
  },

};
