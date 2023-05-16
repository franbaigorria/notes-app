module.exports = {
  collectCoverage:false,
  collectCoverageFrom:["src/**/*.{ts,tsx}"],
  coverageDirectory:"coverage",
  testEnvironment:"jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
}