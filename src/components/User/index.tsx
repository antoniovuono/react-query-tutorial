import React from "react";

import {
    Container,
    DescriptionContainer,
    Photo,
    ProfileDescription,
    ProfileInfo,
} from "./styles";

type UserProps = {
    avatar_url: string;
    username: string;
    full_name: string;
    bio: string;
};

export const User = ({ avatar_url, username, full_name, bio }: UserProps) => {
    return (
        <Container>
            <Photo source={{ uri: avatar_url }} />

            <ProfileInfo>{username}</ProfileInfo>
            <ProfileInfo>{full_name}</ProfileInfo>

            <DescriptionContainer>
                <ProfileDescription>{bio}</ProfileDescription>
            </DescriptionContainer>
        </Container>
    );
};
