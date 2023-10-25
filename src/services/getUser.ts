import { instance } from "./createInstance";

export async function getUser(param: string) {
    try {
        const res = await instance.get(`users/${param}`);

        return res.data;
    } catch (err) {
        console.error(err);
    }
}
