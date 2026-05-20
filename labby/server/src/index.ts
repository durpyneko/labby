import { Elysia, file } from "elysia"
import { readFileSync } from "fs"

// SwaggerUI plugin is depricated
// https://elysiajs.com/plugins/openapi.html
import { openapi } from "@elysia/openapi"
import { cors } from "@elysiajs/cors"

const app = new Elysia()
  .use(cors({ origin: "http://localhost:3000" })) // permit the browser to read responses from this origin (frontend)
  .use(openapi())
  .get("/", ({ redirect }) => {
    return redirect("/openapi")
  })
  .get("/data/set", () => {
    const data = JSON.parse(readFileSync("data/set.json", "utf-8")) // TODO store in a cache
    return data
  })
  .listen(3001)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
