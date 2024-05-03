import request from "supertest";
import app from "./app";

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the user-api", () => {
  test("Getting all users should response GET", () => {
    return request(app)
      .get("/api/user")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("Getting one users should response GET", () => {
    return request(app)
      .get("/api/user/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the book-api", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/api/books")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should response the GET method", () => {
    return request(app)
      .get("/api/books/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
