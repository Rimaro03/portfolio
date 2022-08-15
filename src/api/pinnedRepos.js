import axios from "axios"

export const pinnedRepos = async () => {
    return await axios.get("https://gh-pinned-repos.egoist.dev/?username=rimaro03").then(res => res.data)
}