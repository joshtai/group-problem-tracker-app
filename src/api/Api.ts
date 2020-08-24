import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
//import {API_BASE_URL} from './api.config';

/**
 * ES6 Axios Class.
 *
 * @class Api
 * @extends {Axios}
 * @example
 * class UserApi extends Api {
 *   public constructor (config) {
 *     super(config);
 *
 *     this.login=this.login.bind(this);
 *   }
 *
 *   public login (user: User) {
 *     return this.api.post<string, User, AxiosResponse<User>>("https://www.domain/login", {name: user.name, pass: user.pass})
 *        .then((res: AxiosResponse<string>) => res.data);
 *   }
 * }
 */

export class Api {

    //not sure if this is the best way to include all the properties
    [x: string]: any;

    /**
     * Creates an instance of Api.
     *
     * @param {import("axios").AxiosRequestConfig} [config] - axios configuration.
     * @memberof Api
     */
    public constructor(config: AxiosRequestConfig) {
        this.api = axios.create(config);

        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            baseUrl: process.env.API_BASE_URL, ...param
        }));

        this.post = this.post.bind(this);
    }


    /**
    * HTTP POST method `statusCode`: 201 Created.
    *
    * @access public
    * @template T - `TYPE`: expected object.
    * @template B - `BODY`: body request object.
    * @template R - `RESPONSE`: expected object inside a axios response format.
    * @param {string} url - endpoint you want to reach.
    * @param {B} data - payload to be send as the `request body`,
    * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
    * @returns {Promise<R>} - HTTP [axios] response payload.
    * @memberof Api
    */
    public post<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.api.post(url, data, config);
    }


    /**
    *
    * @template T - type.
    * @param {import("axios").AxiosResponse<T>} response - axios response.
    * @returns {T} - expected object.
    * @memberof Api
    */
    public success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    public error(error: AxiosError<Error>) {
        throw error;
    }
}