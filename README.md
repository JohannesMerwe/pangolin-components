# Pangolin Components

## ButtonOrLink Component

The `ButtonOrLink` component is a versatile element that can be rendered as either a button or a link depending on the properties provided.

### Usage

To use the `ButtonOrLink` component, it must be wrapped in a `ThemeProvider` component with a specified theme.

Here is a basic example:

```jsx
import { ThemeProvider } from "styled-components";
import ButtonOrLink from "./components/ButtonOrLink";
import defaultTheme from "./theme";

<ThemeProvider theme={defaultTheme}>
    <ButtonOrLink>Button Text</ButtonOrLink>
</ThemeProvider>;
```

This will render a default button with the text "Button Text".

If you provide a to prop, ButtonOrLink will render as a link:

```jsx
<ThemeProvider theme={defaultTheme}>
    <ButtonOrLink to="https://example.com">Link Text</ButtonOrLink>
</ThemeProvider>
```

This will render a link with the text "Link Text", which points to "https://example.com".

### Props

`ButtonOrLink` accepts the following props:

-   `to`: A string specifying the URL to which the link should point. If provided, `ButtonOrLink` will render as a link; otherwise, it will render as a button.
-   `primary`, `secondary`, `tertiary`: Boolean props to specify the button type. Only one should be provided.
-   `large`: A boolean prop to specify whether the button should be large.
-   `onClick`: A function to be called when the button is clicked.
-   `children`: The content to be rendered within the button or link.

## Typography Component

The Typography component is used to render text with specific styling based on the theme.

### Usage

Like `ButtonOrLink`, `Typography` must also be wrapped in a `ThemeProvider` component.

Here is a basic example of how to use the `Typography` component:

```jsx
import { ThemeProvider } from "styled-components";
import Typography from "./components/Typography";
import defaultTheme from "./theme";

<ThemeProvider theme={defaultTheme}>
    <Typography variant="h1">Heading 1</Typography>
</ThemeProvider>;
```

This will render an h1 heading with the text "Heading 1".

### Props

`Typography` accepts the following props:

-   `variant`: The style variant of the text. It can be one of `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `body1`, `body2`, `caption`, `button`, `subtitle1`, `subtitle2`, `overline`.
-   `component`: The HTML element to use to render the text. If not provided, it defaults to the element corresponding to the variant prop. For example, if `variant="h1"`, the component will render an `h1` element by default.
-   `children`: The text to be rendered within the typography component.

**Note:** Remember to replace the paths in the import statements with the actual paths to the components and theme in your project.
