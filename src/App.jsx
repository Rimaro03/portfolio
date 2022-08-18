import { Box, Typography, useMediaQuery } from "@mui/material"
import { ThemeProvider } from "styled-components"
import Card from "./components/Card"
import Projects from "./components/Projects"
import { ChildContainer, MainContainer, Titles } from "./style/components"
import { theme } from "./style/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <ChildContainer>
          <Box>
            <Titles variant={"h5"} textAlign={"center"}>WHO AM I</Titles>
            <Card />
          </Box>
          <Box width="50%" minWidth={"300px"}>
            <Titles variant={"h5"} textAlign={"center"}>GITHUB PINNED PROJECTS</Titles>
            <Projects />
          </Box>
        </ChildContainer>
      </MainContainer>
    </ThemeProvider >
  )
}

export default App
