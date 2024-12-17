import jwt from 'jsonwebtoken'
import config from '../config'

type TTokenData = {
    name:  string
    email: string,
    role : string, 
    image: string
}

const createToken = async(TokenData : TTokenData) => {

    const Token = await jwt.sign(TokenData, (config.JWtSecret as string), {expiresIn: "1h"})
    

    return Token

}

export default createToken