import { expect, describe } from "@jest/globals";
import { app } from "../../app";
import supertest from "supertest";

describe("/check response", () => {
  it("should return status 200", async () => {
    const response = await supertest(app).get("/check");
    expect(response.status).toBe(200);
  });
});
