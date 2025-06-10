const path = require("path");
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [path.join(__dirname, "jest.setup.js")],
  transform: {
    "^.+\\\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": path.join(__dirname, "jest.mock.js"),
  },
}; 