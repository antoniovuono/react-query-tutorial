import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./src/screns/Home";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    );
};

export default App;
