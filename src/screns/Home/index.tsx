import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Container, Loading, Username } from "./styles";
import { useSearchUser } from "../../hooks/useSearchUser";
import { useUserStore } from "../../store/user";

export const Home = () => {
    const { navigate } = useNavigation();

    const setUsername = useUserStore((state) => state.updateName);
    const { isError, error, isLoading, data } = useSearchUser();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Username>{error.message}</Username>;
    }

    setUsername(data?.name);

    return (
        <Container>
            <Username>{data?.name}</Username>
            <TouchableOpacity onPress={() => navigate("Second")}>
                <Text>Navegar</Text>
            </TouchableOpacity>
        </Container>
    );
};
