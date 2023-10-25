import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import AppRoutes from "./src/routes";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <AppRoutes />
            </SafeAreaProvider>
        </QueryClientProvider>
    );
};

export default App;
