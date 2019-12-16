const request = require("supertest");
const server = require("../api/server.js");

describe("POST /register", () => {
  it("Should return 201 OK", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Katrina", password: "testing" });
    expect(res.status).toBe(201);
  });
  it("Should return json object", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Katrina", password: "testing" });
    expect(res.type).toBe("application/json");
  });
});

describe("POST /login", () => {
  it("Should return 200 OK", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Katrina", password: "testing" });
    expect(res.status).toBe(200);
  });
  it("Should return json object", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Katrina", password: "testing" });
    expect(res.type).toBe("application/json");
  });
});

describe("GET /jokes", () => {
  it("Should return an error", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res.status).toBe(401);
  });
  it("Should return json object", async () => {
    const res = await request(server)
      .get("/api/jokes")
    expect(res.type).toBe("application/json");
  });
});
