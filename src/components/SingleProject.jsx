import { Bookmarks } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ProjectCard, ProjectTitle, ProjectDesc, ProjectLang } from '../style/components'

const SingleProject = (props) => {
    return (
        <ProjectCard borderColor={props.repo.languageColor} onClick={() => { window.open(props.repo.link, '_blank') }}>
            <Box display={"flex"} >
                <Bookmarks fontSize='medium' sx={{ marginRight: 2 }} />
                <ProjectTitle variant="body1">{props.repo.repo.toUpperCase()}</ProjectTitle>
            </Box>
            <ProjectDesc>{props.repo.description}</ProjectDesc>
            <ProjectLang variant="caption">{props.repo.language}</ProjectLang>
        </ProjectCard>
    )
}

export default SingleProject