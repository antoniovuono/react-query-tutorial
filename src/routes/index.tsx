import { NavigationContainer } from "@react-navigation/native";

import Stack from "./stack.routes";

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
}
