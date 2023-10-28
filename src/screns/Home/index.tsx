import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useQuery } from "react-query";

import {
    Container,
    Content,
    Loading,
    NavigateContent,
    SearchForm,
    Username,
} from "./styles";
import { SearchButton } from "../../components/SearchButton";
import { SearchInput } from "../../components/SearchInput";
import { getUser } from "../../services/getUser";

export const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("");

    const { isLoading, isError, error, data } = useQuery([username], () => {
        if (username) return getUser(username);
    });

    function handleSearch() {
        setUsername(inputValue);
    }

    return (
        <Container>
            <SearchForm>
                <SearchInput
                    placeholder="Usuário"
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <SearchButton title="Pesquisar" onPress={handleSearch} />
            </SearchForm>

            {isLoading ? (
                <Content>
                    <Loading />
                </Content>
            ) : (
                <Content>
                    {isError ? (
                        <Username>{error?.message}</Username>
                    ) : (
                        <Username>{data?.name}</Username>
                    )}
                </Content>
            )}

            <NavigateContent>
                <SearchButton title="Próxima tela" />
            </NavigateContent>
        </Container>
    );
};
