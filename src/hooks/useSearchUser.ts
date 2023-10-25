import { useQuery } from "react-query";

import { getUser } from "../services/getUser";

export const useSearchUser = () => {
    const { isLoading, isError, error, data } = useQuery(["key"], () =>
        getUser("antoniovuono"),
    );

    return {
        isLoading,
        isError,
        error,
        data,
    };
};
