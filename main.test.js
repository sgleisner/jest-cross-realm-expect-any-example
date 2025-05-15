const { getResponse, getObject } = require("./main");

describe("getResponse", () => {
  it("should return the correct JSON response", async () => {
    const response = getResponse();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toMatchObject({
      message: expect.any(String),
      details: expect.any(Array),
    });
  });

  it("should return the correct Object", async () => {
    const object = getObject();

    expect(object).toMatchObject({
      message: expect.any(String),
      details: expect.any(Array),
    });
  });
});
