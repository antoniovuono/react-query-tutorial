import React from "react";

import { Container, Loading, Username } from "./styles";
import { useSearchUser } from "../../hooks/useSearchUser";

export const ThirdPage = () => {
    const { isError, error, isLoading, data } = useSearchUser();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Username>{error.message}</Username>;
    }

    return (
        <Container>
            <Username>{data.name}</Username>
        </Container>
    );
};

// export const ThirdPage = () => {
//     const userName = useUserStore((state) => state.name);

//     return (
//         <Container>
//             <Username>{userName}</Username>
//         </Container>
//     );
// };
