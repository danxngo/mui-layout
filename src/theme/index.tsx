import { ThemeProvider } from "@emotion/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import useColorMode, { ColorModeProvider } from "./color-mode-provider";
import createDefaultTheme from "./create-default-theme";
//import createLpTheme from "./create-lp-theme";

const ThemeWrapper :React.FC<{children : React.ReactNode}> = ({children}) =>{
    const {colorMode} = useColorMode();
    const theme = createDefaultTheme(colorMode);
    //const theme = createLpTheme(colorMode);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: "none" },
                    html: { WebkitFontSmoothing: "auto" },
                }}
            />
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

const ExtendThemeProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    return <ColorModeProvider><ThemeWrapper>{children}</ThemeWrapper></ColorModeProvider>
}

export default ExtendThemeProvider;