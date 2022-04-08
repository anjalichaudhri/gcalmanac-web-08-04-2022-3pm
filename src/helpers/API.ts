import superagent from "superagent";

/**
 * Wrapper class for superagent
 */

export default class API {
    readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get(path: string) {
        return superagent.get(`${this.baseUrl}${path}`);
    }

    post(path: string, body: any) {
        return superagent.post(`${this.baseUrl}${path}`, body);
    }

    put(path: string, body: any) {
        return superagent.put(`${this.baseUrl}${path}`, body);
    }

    patch(path: string, body: any) {
        return superagent.patch(`${this.baseUrl}${path}`, body);
    }

    delete(path: string) {
        return superagent.delete(`${this.baseUrl}${path}`);
    }
}
