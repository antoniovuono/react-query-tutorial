import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const SearchForm = styled.View`
    padding: 0 20px;
    gap: 10px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.ActivityIndicator``;

export const Username = styled.Text``;

export const NavigateContent = styled.View`
    padding: 20px;
`;

export const Navigate = styled.TouchableOpacity`
    width: 100%;
`;
