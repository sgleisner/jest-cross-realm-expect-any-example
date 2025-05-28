const { JSDOM } = require("jsdom");

function getResponseWithArray() {
  return new Response(
    JSON.stringify({
      message: "Hello, Node.js Response!",
      details: ["apple", "banana", "cherry"],
    })
  );
}

function getObjectWithArray() {
  return {
    message: "Hello, Object!",
    details: ["apple", "banana", "cherry"],
  };
}

function getResponseWithReferenceType() {
  return new Response(
    JSON.stringify({
      message: "Hello, Node.js Response!",
      details: new Map(),
    })
  );
}

function getObjectWithReferenceType() {
  return {
    message: "Hello, Object!",
    details: new Map(),
  };
}

function getObjectWithCrossRealmPrimitiveWrapperType() {
  const dom = new JSDOM();
  const win = dom.window;
  return new win.String("Hello, String!");
}

function getObjectWithPrimitiveWrapperType() {
  return {
    message: "Hello, Object!",
    details: new String("Hello, String!"),
  };
}

module.exports = {
  getResponseWithArray,
  getObjectWithArray,
  getResponseWithReferenceType,
  getObjectWithReferenceType,
  getObjectWithCrossRealmPrimitiveWrapperType,
  getObjectWithPrimitiveWrapperType,
};
