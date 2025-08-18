import { comments, posts } from "./dataSource.js";
import { users } from "./dataSource.js";
export const blogMutation = {
  createPost: (_, { title, content, authorId }) => {
    const newPost = {
      id: String(posts.length + 1),
      title,
      content,
      authorId,
    };
    posts.push(newPost);
    return newPost;
  },

  updateUser: (_, { id, name, email }) => {
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      throw new Error("USer not found");
    }

    if (name) {
      users[userIndex].name = name;
    }
    if (email) {
      users[userIndex].email = email;
    }

    return users[userIndex];
  },

  deleteComment:(_, {id})=>{
    const commentIndex= comments.findIndex((c)=>c.id===id);
    if(commentIndex === -1)
    {
      throw new Error("Comments not found");
    }

    const deletedComments= comments[commentIndex];
    comments.splice(commentIndex,1);
    return deletedComments;
  },

  createComment: (_,{text,postId})=>{
    const newComment= {
    id:String(comments.length+1),
    text,
    postId,
    
    }
    comments.push(newComment);
    return newComment;
  }
};
