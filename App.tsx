import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./src/routes";
import theme from "./src/styles/theme";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 5 * (60 * 10000), // 5 minutes
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <AppRoutes />
                </SafeAreaProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
