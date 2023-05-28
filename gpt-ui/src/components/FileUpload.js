import React, { useEffect, useState } from 'react'
import { getKnowledgeBase, uploadFileToServer } from '../actions'

export default function FileUpload(props) {
    const [files, setFiles] = useState([])
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        refreshFileNames()
    }, [])

    const refreshFileNames = () => {
        getKnowledgeBase().then(res => setFiles(res))
    }

    const uploadFile = (file) => {
        console.log("uploading...")
        setUploading(true)
        uploadFileToServer(file).then(() => {
            refreshFileNames()
            setUploading(false)
        })
    }

    return <div className='app-container__file-upload'>
        <div className='header'>
            Knowledge Base
        </div>

        <div className='add-file'>
            <div>Add File</div>
            <label>
                <input type="file" name="file"  onChange={e => uploadFile(e.target.files[0])}/>
                <img src='add-file-bold.svg' width={24} height={24} />
            </label>

        </div>


        <div className='knowledge-base'>
            {uploading ? <div>Uploading...</div> :
                <>
                    Uploaded Files:
                    {files.map((file, index) => <div className='knowledge-base__file' key
                        ={index}>
                        {file}
                    </div>)}
                </>
            }

        </div>
    </div>
}