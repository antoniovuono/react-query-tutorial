import React from "react";
import { TextInputProps } from "react-native";

import { InputContent } from "./styles";

export const SearchInput = ({ ...rest }: TextInputProps) => {
    return <InputContent {...rest} autoCapitalize="none" />;
};
