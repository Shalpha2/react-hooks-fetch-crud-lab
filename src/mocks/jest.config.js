// jest.config.js
module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(\\@adobe/css-tools)/)", // <-- allow this one to be transformed
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
  