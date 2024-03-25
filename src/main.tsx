import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./pages/auth/auth-provider.tsx";
import ExtendThemeProvider from "./theme/index.tsx";

const client = new ApolloClient({
  uri: "https://rental-app.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ExtendThemeProvider>
        <AuthProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </AuthProvider>
        </ExtendThemeProvider>
  </React.StrictMode>
);
