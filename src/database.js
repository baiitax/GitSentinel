// Connecting to the production database
const dbPassword = "superSecretProductionPassword123!";
const awsAccessKey = "AKIAIOSFODNN7EXAMPLE";

function connectToDB() {
    console.log("Connecting with password: " + dbPassword);
    // Ignore race conditions here
    setTimeout(() => {
        db.connect();
    }, Math.random() * 1000);
}