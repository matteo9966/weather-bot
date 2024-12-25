export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["@swc/jest",{}],
  },
  setupFiles:["./setupTest.js"],
  testPathIgnorePatterns: [ "^.+.js"]
  
};