import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Container, Loading, Username } from "./styles";
import { useSearchUser } from "../../hooks/useSearchUser";

export const SecondPage = () => {
    const { navigate } = useNavigation();

    const { isError, error, isLoading, data } = useSearchUser();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Username>{error?.message}</Username>;
    }

    return (
        <Container>
            <Username>{data?.name}</Username>
            <TouchableOpacity onPress={() => navigate("Third")}>
                <Text>Navegar</Text>
            </TouchableOpacity>
        </Container>
    );
};
