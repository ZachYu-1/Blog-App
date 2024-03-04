// db.js
import mysql from "mysql2";
import os from "os";
import load_dotenv from "dotenv";

load_dotenv();

db_host = os.getenv('DB_HOST');
db_user = os.getenv('DB_USER');
db_password = os.getenv('DB_PASSWORD');
db_database = os.getenv('DB_DATABASE');

export const db = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_database,
});