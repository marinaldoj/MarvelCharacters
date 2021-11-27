import axios from "axios";
import md5 from 'md5'

const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const time = Number(new Date());

const hash = md5(time+privateKey+publicKey)

export const securityAccess = `?ts=${time}&apikey=${publicKey}&hash=${hash}`


export const Api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public'
})
