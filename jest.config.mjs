export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  setupFiles:["./setupTest.js"],
  testPathIgnorePatterns: [ "^.+.js"]
  
};