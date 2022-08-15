import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { pinnedRepos } from '../api/pinnedRepos'
import { ProjectsContainer } from '../style/components'
import SingleProject from './SingleProject';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        pinnedRepos().then(res => setRepos(res))
    }, [])

    return (
        <ProjectsContainer container spacing={10}>
            {repos.map((item, index) => {
                return (
                    <Grid item xs={6}>
                        <SingleProject repo={item} key={index} />
                    </Grid>
                )
            })}
        </ProjectsContainer>
    )
}

export default Projects