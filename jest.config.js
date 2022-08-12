module.exports = {
    roots: [
        "./src"
    ],
    testMatch: [
        "**/_tests_/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
    ],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
}