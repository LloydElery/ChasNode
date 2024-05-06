import request from "supertest";
import app from "../../app";

describe("Test express book feature", () => {
  test("'Getting all books' should respond to GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("Should include 2 books", async () => {
    const response = await request(app).get("/api/books");
    // Testa objekt med `toStrictEqual`
    expect(response.body).toStrictEqual({
      totalBooks: 2,
      books: [
        {
          author: "Dennis",
          title: "The Book",
          pages: 666,
        },
        {
          author: "Joseph",
          title: "The Bible",
          pages: 999,
        },
      ],
    });
  });
});
