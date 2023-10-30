import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_BUTTON};
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 6px;
`;

export const Title = styled.Text`
    color: white;
`;
