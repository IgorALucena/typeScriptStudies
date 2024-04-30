const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

export default{
    port:3000,
    dbUri:`mongodb+srv://${dbUser}:${dbPass}@cluster0.v34oejr.mongodb.net/apiDb?retryWrites=true&w=majority&appName=Cluster0`,
    env: "development"
}
