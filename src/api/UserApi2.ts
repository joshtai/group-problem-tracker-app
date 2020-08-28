import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { setCookie } from "./CookieUtils";


const userServiceUrl = "usermanagement";

export class UserApi2 {
    /**
     * loginUser
     */
    public loginUser(userId: string, password: string): string {
        const authHeaderValue = 'Basic ' + btoa(`${userId}:${password}`);

        axios.get(`${userServiceUrl}`,{'headers': {'Authorization': authHeaderValue}}).then(result => {

        if(!result) {
            console.log("Login failure");

            return "Login failure";
        } else {
            let session = result.data.data[0];
            setCookie('access_token', session.access_token);
        }
    });

         


        
    }
}