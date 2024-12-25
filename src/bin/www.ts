import { Server } from "http";
import { app } from "../app";
import { debug } from "debug";
debug("app: ");
console.log("PORT:");
console.log(process.env.PORT);
console.log("Weather token:");
console.log(process.env.WEATHER_TOKEN);

function main() {
  const server = app.listen(process.env.PORT || 3000, () => {
    onListening(server);
  });
}

function onListening(server: Server) {
  console.log("Server started: ", server.address());
  const addr = server.address();
  const bind =
    typeof addr === "string"
      ? "pipe " + addr
      : "port " + addr?.port || "NO-PORT";
  debug("app: ")("Listening on " + bind);
}

main();
