// Importing the type 'Preview' from the '@storybook/react' package
import type { Preview } from "@storybook/react";

// Importing the 'withThemeFromJSXProvider' function from the '@storybook/addon-styling' package
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

// Importing the 'createGlobalStyle' function from the 'styled-components' package
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Import the default theme for package preview
import defaultTheme, { lightTheme, darkTheme } from "../src/theme";

// Defining a 'Preview' type object called 'preview'
// This object sets parameters for Storybook, specifying certain controls and actions to be applied to the components when they are previewed in Storybook.
const preview: Preview = {
    parameters: {
        // The 'actions' parameter specifies that any prop starting with 'on' followed by a capital letter will be treated as an action.
        actions: { argTypesRegex: "^on[A-Z].*" },

        // The 'controls' parameter specifies matchers to automatically infer control types based on the prop's name.
        // It is set to match any color or date props based on the provided regular expressions.
        controls: {
            matchers: {
                color: /(background|color)$/i, // Matches any prop ending with 'background' or 'color'
                date: /Date$/, // Matches any prop ending with 'Date'
            },
        },
    },
};

// Exporting the 'preview' object as the default export of this module
export default preview;

// Creating a global style that will be applied to all components.
// Here, the font family of the body is set to be "Nunito Sans", "Helvetica Neue", Helvetica, Arial, or sans-serif, in order of preference.
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

// Exporting a decorator that uses the 'withThemeFromJSXProvider' function.
// Decorators are functions that wrap story functions to add extra rendering functionality.
// The 'withThemeFromJSXProvider' function adds the 'GlobalStyles' to all stories, applying the global styles to all components.
export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            default: defaultTheme,
            light: lightTheme,
            dark: darkTheme,
        },
        defaultTheme: "default",
        Provider: ThemeProvider,
        GlobalStyles,
    }),
];
