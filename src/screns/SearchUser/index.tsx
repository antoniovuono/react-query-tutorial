import React, { useState } from "react";

import { Container } from "./styles";
import { SearchButton } from "../../components/SearchButton";
import { SearchInput } from "../../components/SearchInput";
import { useSearchUser } from "../../hooks/useSearchUser";

export const SearchUser = () => {
    const {
        user,
        isError,
        isLoading,
        error,
        refetch,
        handleSearch,
        search,
        setSearch,
    } = useSearchUser();

    const [userInput, setUserInput] = useState("");

    return (
        <Container>
            <SearchInput
                placeholder="usuário"
                value={search}
                onChangeText={setSearch}
            />
            <SearchButton title="procurar" onPress={handleSearch} />
        </Container>
    );
};
