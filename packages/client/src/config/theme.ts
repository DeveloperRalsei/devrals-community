import { createTheme, DEFAULT_THEME } from "@mantine/core";

export const theme = createTheme({
    ...DEFAULT_THEME,
    fontFamily: "Undertale",
    primaryColor: "teal",
    fontSizes: {
        md: "1.1em",
    },

    black: "#000",
    cursorType: "pointer",
    white: "#c9c9c9",
    components: {
        Title: {
            defaultProps: {
                ff: "undertale",
            },
        },
    },
});
