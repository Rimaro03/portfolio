import { Backdrop, Button, CircularProgress, Icon, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Avatar, Background, ButtonContainer, CardAvatar, CardBody, CardContainer, CardHeader, InfoContainer, SocialContainer } from '../style/components'
import { Cake, Mail } from '@mui/icons-material'
import { LocationOn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import AvatarImage from "../assets/avatar.jpg"

const Card = () => {
    return (
        <CardContainer>
            <CardHeader />
            <CardAvatar>
                <Avatar src={"https://avatars.githubusercontent.com/u/57857328?s=400&u=e5f5476d5ede405117cdfa1e946cf996f56a79a6&v=4"} />
            </CardAvatar>
            <CardBody>
                <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontSize: "22px" }}>LEONARDO ONGARO</Typography>
                <Typography sx={{ color: "white" }}>Junior web developer</Typography>
                <InfoContainer sx={{ color: "white" }}>
                    <Box >
                        <LocationOn sx={{ fontSize: 40 }} />
                        <Typography>Italy</Typography>
                    </Box>
                    <Box>
                        <Cake sx={{ fontSize: 40 }} />
                        <Typography>04-12</Typography>
                    </Box>
                </InfoContainer>
                <ButtonContainer>
                    <Button sx={{ color: "white", backgroundColor: "#203075", width: "100%", borderRadius: "20px" }} href={"https://wa.me/3881015595"}>Contact Me</Button>
                </ButtonContainer>
                <SocialContainer>
                    <IconButton sx={{ color: "white" }} href={"https://www.github.com/Rimaro03"}><GitHub fontSize="large" /></IconButton>
                    <IconButton sx={{ color: "white" }} href={"https://www.instagram.com/ongaroleo"}><Instagram fontSize="large" /></IconButton>
                    <IconButton sx={{ color: "white" }} href={"https://www.linkedin.com/in/leonardo-ongaro-7172a9218"}><LinkedIn fontSize="large" /></IconButton>
                </SocialContainer>
                <Box display={"flex"} flexDirection={"row"} color={"white"} marginTop={2} justifyContent={"center"}>
                    <Mail fontSize='small' />
                    <Typography paddingLeft={1} variant={"subtitle2"}>leonardo.ongaro.work@gmail.com</Typography>
                </Box>
            </CardBody>
        </CardContainer>
    )
}

export default Card