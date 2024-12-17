import app from "./app"

function main(){

    app.listen(7000, ()=>{
        console.log(`server Listening port ${7000}...`)
    })

}

main()