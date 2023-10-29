import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 20px;
`;

export const Photo = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
`;

export const ProfileInfo = styled.Text``;

export const DescriptionContainer = styled.View`
    padding: 20px;
    width: 100%;
    border-width: 1px;
    border-radius: 6px;
`;

export const ProfileDescription = styled.Text`
    font-size: 12px;
    text-align: left;
`;
