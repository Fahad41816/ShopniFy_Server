import env from 'dotenv'

env.config()


export default{
    Port : 7000,
    JWtSecret : process.env.Jwt_Secret,
    sslcommerz_StoreId: process.env.SSLCOMMERZ_STOREID,
    sslcommerz_StorePass: process.env.SSLCOMMERZ_STOREPASS, 
}