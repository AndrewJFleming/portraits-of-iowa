import React, { useState, useRef } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../../firebase/firebase.js";
import "./UploadForm.css";
import AuthMessage from "./AuthMessage/AuthMessage.jsx";

const UploadForm = ({ user, isPassedDeadline, deadline }) => {
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.floor(Math.random() * 90000) + 10000;
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const promises = [];
    images.map((image) => {
      const storageRef = ref(storage, `files/${user.email}_${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
          console.log("progress updated");
        },
        (error) => console.log(error),
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
            setUrls((prevState) => [...prevState, downloadURLs]);
            console.log("File available at", downloadURLs);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => console.log("All files uploaded"))
      .then((err) => console.log(err));
  };

  return (
    <div
      className={`uploadForm-wrapper ${
        isPassedDeadline && "passed-deadline-background"
      }`}
    >
      {!isPassedDeadline && user ? (
        <React.Fragment>
          {user && (
            <div className="active-user-wrapper">
              <p className="mb-0">
                Logged in as: <strong>{user.email}</strong>
              </p>
            </div>
          )}
          <form id="uploadForm">
            <div>
              <label htmlFor="files" className="serif-text">
                <h5>Upload Files</h5>
              </label>
              <br />
              <input onChange={handleChange} type="file" id="files" multiple />
            </div>
            <div>
              <button id="send" onClick={handleUpload}>
                Upload
              </button>
              &nbsp;{progress}%
            </div>
            {urls &&
              urls.map((url) => (
                <div>
                  <img
                    className="upload-result"
                    src={url}
                    alt="Upload successful result"
                  />
                </div>
              ))}
          </form>
        </React.Fragment>
      ) : (
        <AuthMessage isPassedDeadline={isPassedDeadline} deadline={deadline} />
      )}
    </div>
  );
};

export default UploadForm;
