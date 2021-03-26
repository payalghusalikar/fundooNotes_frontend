/**
 * @module       services
 * @file         apiCall.js
 * @description  holds the methods calling from user.js
 * @author       Payal Ghusalikar <payal.ghusalikar9@gmail.com>
*  @since        05/03/2021  
-----------------------------------------------------------------------------------------------*/

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:2001/';
const commonHeaders = 'Bearer ' + sessionStorage.getItem('token');



export default {
    /**
     * @description takes the data from user.js file and call the axios post method and return response to user.js
     * @param {*} data holds the userinput and endPoint
     * @returns the response from axios methods
     */
    post(userData) {
        return axios.post(userData.endPoint, userData.userInput);
    },

    /**
     * @description takes the data from user.js file and call the axios post method and return response to user.js
     * @param {*} data holds the userinput and endPoint
     * @returns the response from axios methods
     */
    postWithToken(userData) {
        console.warn('inside apicall');
        return axios.post(userData.endPoint, userData.userInput, {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
        });
    },
    /**
     * @description takes the data from user.js file and call the axios put method and return response to user.js
     * @param {*} data holds the userinput and endPoint
     * @returns the response from axios methods
     */
    put(userData) {

        return axios.put(userData.endPoint, userData.userInput, {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
        });
    },

    /**
     * @description get all notes from database and return responce to caller file
     * @returns the response from axios methods
     */
    get(userData) {

        return axios.get(userData.endPoint, {
            headers: {
                //  Authorization: 'Bearer ' + sessionStorage.getItem('token'),

                Authorization: commonHeaders

            },
        });
    },




    /**
     * @description delete note permanently from database and return responce to caller file
     * @returns the response from axios methods
     */
    delete(userData) {
        console.log("inside dele")
        return axios.delete(userData.endPoint, {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
        });
    },
};