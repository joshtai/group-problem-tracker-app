import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { setCookie } from "./CookieUtils";


const userServiceUrl = "usermanagement";

export class UserApi2 {
    /**
     * loginUser
     */
    public loginUser(userId: string, password: string) {
        const authHeaderValue = 'Basic ' + btoa(`${userId}:${password}`);

        axios.get(`${userServiceUrl}/login`, { 'headers': { 'Authorization': authHeaderValue } }).then(result => {

            if (!result) {
                console.log("Login failure");

            } else {
                console.log("Got some result !!" + result);


                let session = result.data.data[0];
                setCookie('access_token', session.access_token);
            }
        });
    }

    /**
     * loginUser
     */
    public logoutUser(userId: string, password: string) {
        const authHeaderValue = 'Basic ' + btoa(`${userId}:${password}`);

        axios.get(`${userServiceUrl}/logout`, { 'headers': { 'Authorization': authHeaderValue } }).then(result => {

            if (!result) {
                console.log("Logout failure");
            } else {
                console.log("Got some result !!" + result);

                //remove session info from localStorage
            }
        });
    }


    /**
     * registerUser
     */
    public registerUser(userId: string, userEmail: string, password: string) {

    }






}