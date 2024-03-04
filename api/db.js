// db.js
import mysql from "mysql2";

load_dotenv();

db_host = os.getenv('DB_HOST');
db_user = os.getenv('DB_USER');
db_password = os.getenv('DB_PASSWORD');
db_database = os.getenv('DB_DATABASE');

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "blog_app",
});