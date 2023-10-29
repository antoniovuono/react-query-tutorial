import { useQuery } from "react-query";

import { get } from "../services/network/get";

type useSearchUserProps = {
    username: string;
};

export const useSearchUser = ({ username }: useSearchUserProps) => {
    const { isLoading, isError, error, data } = useQuery(
        ["user", username],
        () => username && get(`users/${username}`),
    );

    return {
        isLoading,
        isError,
        error,
        data,
    };
};
