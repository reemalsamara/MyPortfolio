module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["./jest.setup.cjs"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest"
    }
};
