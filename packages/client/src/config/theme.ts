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
        Button: {
            defaultProps: {
                variant: "light",
                size: "sm",
            },
        },
        Popover: {
            defaultProps: {
                withArrow: false,
                withOverlay: true,
                zIndex: 1000,
                overlayProps: {
                    zIndex: 999,
                    blur: "5px",
                },
            },
        },
        Title: {
            defaultProps: {
                ff: "undertale",
            },
        },
    },
});
