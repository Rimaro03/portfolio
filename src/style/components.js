import { Grid, Typography } from "@mui/material";
import { Box, style, styled } from "@mui/system";
import CardBackground from "../assets/card-background.jpg"

export const MainContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#151965",
    minHeight: "100%",
}))

export const ChildContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: "10em",

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        paddingTop: "1em",
    }
}))

export const Titles = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: "bold",
    margin: 20,

    [theme.breakpoints.down("lg")]: {
        fontSize: 20,
    }
}))

export const CardContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#32407B",
    minWidth: "300px",
    height: "570px",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("lg")]: {
        marginBottom: 50
    }
}))

export const CardHeader = styled(Box)(() => ({
    backgroundImage: `url(${CardBackground})`,
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

export const ProjectsContainer = styled(Grid)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("lg")]: {
        marginBottom: 50
    }
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
    ":hover": {
        cursor: "pointer"
    }
}))

export const ProjectTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: 18,

    [theme.breakpoints.down("lg")]: {
        fontWeight: "bold",
        fontSize: 15
    }
}))

export const ProjectDesc = styled(Typography)(({ theme }) => ({
    fontSize: 15,

    [theme.breakpoints.down("lg")]: {
        fontSize: 13
    }
}))

export const ProjectLang = styled(Typography)(({ theme }) => ({
    fontSize: 12,

    [theme.breakpoints.down("lg")]: {
        fontSize: 10
    }
}))
