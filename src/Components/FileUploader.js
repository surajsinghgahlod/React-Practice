import React, { useState } from 'react'

export default function FileUploader() {
    const [file, setFile] = useState(null)
    const handleChange = (e) => {
        const selectedFile = e.target.value[0]
        setFile(selectedFile)
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handleChange} />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
    </div>
  )
}
