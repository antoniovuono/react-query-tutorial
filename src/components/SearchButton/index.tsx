import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

type ISearchButton = TouchableOpacityProps & {
    title: string;
};

export const SearchButton = ({ title, ...rest }: ISearchButton) => {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    );
};
