import { Grid, Typography } from "@mui/material";
import { Box, style, styled } from "@mui/system";

export const MainContainer = styled(Box)(() => ({
    backgroundColor: "#151965",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0
}))

export const ChildContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
    width: "100%"
}))

export const Titles = styled(Typography)(() => ({
    color: "white",
    fontWeight: "bold",
    margin: 20,
}))

export const CardContainer = styled(Box)(() => ({
    backgroundColor: "#32407B",
    minWidth: "300px",
    height: "530px",
    borderRadius: "20px"
}))

export const CardHeader = styled(Box)(() => ({
    backgroundImage: "url(../src/assets/card-background.jpg)",
    backgroundSize: "300px",
    backgroundPosition: "0px -70px",
    backgroundRepeat: "no-repeat",
    width: "300px",
    height: "150px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px"
}))

export const CardAvatar = styled(Box)(() => ({
    backgroundColor: "#32407B",
    width: "300px",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px"
}))

export const Avatar = styled("img")(() => ({
    position: "relative",
    top: "-50px",
    borderRadius: "50%",
    width: "80px",
    height: "80px"
}))

export const Background = styled("img")(() => ({
    width: "300px",
    overflow: "hidden"
}))

export const CardBody = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
}))

export const InfoContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "30px"
}))

export const ButtonContainer = styled(Box)(() => ({
    marginTop: "30px",
    marginLeft: "20px",
    marginRight: "20px"
}))

export const SocialContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "25px",
    marginLeft: "10px",
    marginRight: "10px",
}))

export const ProjectsContainer = styled(Grid)(() => ({
    width: "100%",
}))

export const ProjectCard = styled(Box)(({ borderColor }) => ({
    borderLeft: `5px solid ${borderColor}`,
    backgroundColor: "#515585",
    padding: 10,
    height: "105px",
    borderRadius: "10px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}))

