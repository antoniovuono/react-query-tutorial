import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screns/Home";

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}
