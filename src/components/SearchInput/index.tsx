import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { InputContent } from "./styles";

export const SearchInput = ({ ...rest }: TextInputProps) => {
    const { COLORS } = useTheme();

    return (
        <InputContent
            {...rest}
            autoCapitalize="none"
            placeholderTextColor={COLORS.PRIMARY_TEXT}
        />
    );
};
