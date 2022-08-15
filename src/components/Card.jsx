import { Backdrop, Button, CircularProgress, Icon, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Avatar, Background, ButtonContainer, CardAvatar, CardBody, CardContainer, CardHeader, InfoContainer, SocialContainer } from '../style/components'
import { Cake } from '@mui/icons-material'
import { LocationOn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Telegram } from '@mui/icons-material'

const Card = () => {
    return (
        <CardContainer>
            <CardHeader />
            <CardAvatar>
                <Avatar src={"../src/assets/avatar.jpg"} />
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
            </CardBody>
        </CardContainer>
    )
}

export default Card