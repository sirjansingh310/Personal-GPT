export const queryPrompt = (prompt) => {
    const params = new URLSearchParams({
        search: prompt
    }).toString()
    return fetch('http://localhost:5601/query?' + params).then(res => res.json())
}

export const getKnowledgeBase = () => {
    return fetch('http://localhost:5601/knowledge-base').then(res => res.json())
}

export const uploadFileToServer = (file) => {
    const formData = new FormData()
    formData.append('file', file)

    return fetch('http://localhost:5601/file/upload', {
        method: 'POST',
        body: formData
    }).catch(error => console.log(error))
}