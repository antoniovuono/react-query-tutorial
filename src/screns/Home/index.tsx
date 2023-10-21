import React from "react";
import { useQuery } from "react-query";

import { Container, Loading, Username } from "./styles";

function getUser(username: any) {
    return fetch(`https://api.github.com/users/${username}`).then((response) =>
        response.json(),
    );
}

const GithubUser = ({ username }: any) => {
    const userQuery = useQuery("username", () => getUser(username));

    const { isLoading, isError, error, data } = userQuery;

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Username>{error.message}</Username>;
    }

    return <Username>{data.name}</Username>;
};

export const Home = () => {
    return (
        <Container>
            <GithubUser username="antoniovuono" />
        </Container>
    );
};
