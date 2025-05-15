function getResponse() {
  return new Response(
    JSON.stringify({
      message: "Hello, Node.js Response!",
      details: ["apple", "banana", "cherry"],
    })
  );
}

function getObject() {
  return {
    message: "Hello, Object!",
    details: ["apple", "banana", "cherry"],
  };
}

module.exports = { getResponse, getObject };
