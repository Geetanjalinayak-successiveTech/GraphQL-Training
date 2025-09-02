// index.js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { typeDefs } from "./src/schema/typeDefs.js";
import { resolvers } from "./src/schema/resolvers.js";
import { ConnectDB } from "./src/config/dbConnect.js";
import { verifyToken } from "./src/utils/auth.js";

ConnectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    let user = null;

    

    if (token) {
      try {
        user = verifyToken(token);
      } catch (error) {
        console.error("Token verification failed:", error);
      }
    }

    return { user };
  }
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);