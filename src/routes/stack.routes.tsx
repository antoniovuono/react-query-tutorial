import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screns/Home";
import { SecondPage } from "../screns/SecondPage";
import { ThirdPage } from "../screns/ThirdPage";

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Second" component={SecondPage} />
            <Screen name="Third" component={ThirdPage} />
        </Navigator>
    );
}
