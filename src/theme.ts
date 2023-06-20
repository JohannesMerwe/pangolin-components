// theme.ts
import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
    colors: {
        background: "#F6F9FC",
        backgroundInverse: "#7A8997",
        positive: "#14A38B",
        negative: "#FF7171",
        primary: "#2C2738",
        secondary: "#756F86",
        tertiary: "#DDDDDD",
        text: "#222222",
        textInverse: "#F6F9FC",
    },
    spacing: {
        padding: {
            small: 10,
            medium: 20,
            large: 30,
        },
        borderRadius: {
            small: 10,
            medium: 25,
            large: 40,
            default: 10,
        },
    },
    typography: {
        type: {
            primary:
                '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        weight: {
            regular: "400",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
        size: {
            s1: 12,
            s2: 14,
            s3: 16,
            m1: 20,
            m2: 24,
            m3: 28,
            l1: 32,
            l2: 40,
            l3: 48,
        },
    },
};

const lightTheme: DefaultTheme = {
    ...defaultTheme,
    colors: {
        background: "#F6F9FC",
        backgroundInverse: "#7A8997",
        positive: "#14A38B",
        negative: "#FF7171",
        primary: "#2C2738",
        secondary: "#756F86",
        tertiary: "#DDDDDD",
        text: "#222222",
        textInverse: "#F6F9FC",
    },
};

const darkTheme: DefaultTheme = {
    ...defaultTheme,
    colors: {
        background: "#2C2738",
        backgroundInverse: "#7A8997",
        positive: "#14A38B",
        negative: "#FF7171",
        primary: "#F2AC57",
        secondary: "#756F86",
        tertiary: "#DDDDDD",
        text: "#F6F9FC",
        textInverse: "#F6F9FC",
    },
};

export { lightTheme, darkTheme };

export default defaultTheme;
