import { Bookmarks } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ProjectCard } from '../style/components'

const SingleProject = (props) => {
    console.log(props.repo.languageColor)
    return (
        <ProjectCard borderColor={props.repo.languageColor}>
            <Box display={"flex"} >
                <Bookmarks fontSize='medium' sx={{ marginRight: 2 }} />
                <Typography variant="body1" fontWeight={"bold"} fontSize={18}>{props.repo.repo.toUpperCase()}</Typography>
            </Box>
            <Typography>{props.repo.description}</Typography>
            <Typography variant="caption">{props.repo.language}</Typography>
        </ProjectCard>
    )
}

export default SingleProject