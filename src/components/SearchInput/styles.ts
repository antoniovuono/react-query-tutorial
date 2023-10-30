import styled from "styled-components/native";

export const InputContent = styled.TextInput`
    width: 100%;
    padding: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_BORDER};
    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT};
`;
