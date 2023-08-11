import axios from 'axios';
import dotenv from 'dotenv';
import { getAuth } from 'firebase/auth';

dotenv.config();

exports.handler = async function (event, context) {
    try{
        
        return { statusCode: 200, body: JSON.stringify('testing') }
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify('testing error') }
    }
}