import React, { useState } from "react";

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
import { User } from "../../components/User";
import { useSearchUser } from "../../hooks/useSearchUser";

export const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("");

    const { data, isError, isLoading, error } = useSearchUser({ username });

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
                        <Username>
                            {error.message || "Erro ao procurar usuário!"}`
                        </Username>
                    ) : (
                        data && (
                            <User
                                username={data.login}
                                full_name={data.name}
                                avatar_url={data.avatar_url}
                                bio={data.bio}
                            />
                        )
                    )}
                </Content>
            )}

            <NavigateContent>
                <SearchButton title="Próxima tela" />
            </NavigateContent>
        </Container>
    );
};
