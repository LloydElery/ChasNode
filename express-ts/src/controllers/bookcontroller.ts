export const getAllBooks = (req: Request, res: any) => {
  res.send({
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
};
