import {Api} from "./Api";
import {AxiosRequestConfig, AxiosResponse} from "axios";

const userServiceUrl = "usermanagement";

export class UserApi extends Api {
    constructor(config: AxiosRequestConfig) {
        super(config);
    }


    public loginUser(credentials: any) {
        return this.post<string, any, AxiosResponse<string>>(`${userServiceUrl}`,credentials)
    }


}



//public userLogin (credentials): Promise<Token>