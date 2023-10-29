import { instance } from "../createInstance";

export async function get(param: string) {
    try {
        const res = await instance.get(param);

        return res.data;
    } catch (err) {
        console.error(err);
    }
}
