const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
    port: 3001,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.20vrpxs.mongodb.net/?retryWrites=true&w=majority`,
    env: "development"
}