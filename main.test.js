const examples = require("./main");

describe("getResponse", () => {
  it("should return the correct JSON response with an Array", async () => {
    const response = examples.getResponseWithArray();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toMatchObject({
      message: expect.any(String),
      details: expect.any(Array),
    });
  });

  it("should return the correct Object with an Array", async () => {
    const object = examples.getObjectWithArray();

    expect(object).toMatchObject({
      message: expect.any(String),
      details: expect.any(Array),
    });
  });

  it("should return the correct JSON response with a reference type", async () => {
    const response = examples.getResponseWithReferenceType();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toMatchObject({
      message: expect.any(String),
      details: expect.any(Map),
    });
  });

  it("should return the correct Object with a reference type", async () => {
    const object = examples.getObjectWithReferenceType();

    expect(object).toMatchObject({
      message: expect.any(String),
      details: expect.any(Map),
    });
  });

  it("should return the correct object with a cross-realm primitive wrapper type", async () => {
    const object = examples.getObjectWithCrossRealmPrimitiveWrapperType();

    expect(object).toMatchObject({
      message: expect.any(String), // Succeeds, since `message` is a primitive string.
      details: expect.any(String), // Fails, since `details` is a cross-realm String object.
    });
  });

  it("should return the correct object with a same-realm primitive wrapper type", async () => {
    const object = examples.getObjectWithPrimitiveWrapperType();

    expect(object).toMatchObject({
      message: expect.any(String),
      details: expect.any(String),
    });
  });
});
