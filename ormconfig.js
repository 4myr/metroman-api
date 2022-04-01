module.exports = {
  type: "postgres",
  host: "127.0.0.1",
  port: 5434,
  username: "amyr",
  password: "3039023",
  database: "metro-api",
  entities: ["dist/js/models/*.js"],
  //   migrations: ["dist/database/migration/*.js"],
  seeds: ["src/database/seeds/*{.ts,.js}"],
  synchronize: true,
};
