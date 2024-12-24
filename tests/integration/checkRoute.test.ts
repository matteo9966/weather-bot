import supertest from "supertest";
import { describe } from "@jest/globals";
import { app } from "../../src/app";
describe("GET /check", () => {
  it("should return 200 OK", async () => {
    const res = await supertest(app).get("/check");
    expect(res.status).toBe(200);
  });
});
