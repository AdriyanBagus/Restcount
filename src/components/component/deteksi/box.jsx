import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './style.css';

const Box = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [detections, setDetections] = useState(null);

  const webcamRef = React.useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedVideo(null); // Reset uploaded video when new file is selected
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setDetections(data);
      const fileURL = URL.createObjectURL(selectedFile);
      setUploadedVideo(fileURL);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="box">
      <h1 className="title">MENGHITUNG DAN DETEKSI JENIS KENDARAAN</h1>
      <div className="camera-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      </div>
      <input type="file" accept="video/*" onChange={handleFileChange} className="file-input" />
      <button onClick={handleUpload} className="upload-button">Upload</button>
      {uploadedVideo && (
        <div className="uploaded-video-container">
          <video controls muted className="uploaded-video">
            <source src={uploadedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {detections && (
        <div className="detections-container">
          <h2>Detections:</h2>
          <pre>{JSON.stringify(detections, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Box;
