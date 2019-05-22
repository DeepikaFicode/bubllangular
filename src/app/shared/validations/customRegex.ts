
/**
 * All Regex for validation declared here.
 */

export let CustomRegex = {

    password: /(?=^.{8,100}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/,
  // tslint:disable-next-line:max-line-length
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    numberOnly: /^[0-9]{1,5}$/,
    macId: /^([0-9A-F]{2}[:]){5}([0-9A-F]{2})$/i,
    webLink: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    allowNumberOnly: /^\+?\d{9,12}$/,
    allowAlphaNumericSpace: /^[A-Za-z0-9- ]+$/,

};
