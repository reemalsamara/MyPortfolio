// client/jest.setup.cjs
const { TextEncoder, TextDecoder } = require("util");

// Make them available globally in Jest tests
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
