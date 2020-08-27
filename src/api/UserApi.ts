import {Api} from "./Api";
import {AxiosRequestConfig} from "axios";

export class UserApi extends Api {
    constructor(config: AxiosRequestConfig) {
        super(config);
    }
}

//public userLogin (credentials): Promise<Token>