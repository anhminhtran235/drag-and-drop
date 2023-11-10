import './App.css';

import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { toBase64 } from './util';
import ImagePredictions from './components/ImagePredictions';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DragAndDropStyled = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 5px dashed #ccc;
  background: ${(props) => (props.isDragActive ? '#eee' : '#fff')};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function App() {
  const [imagesBase64, setImagesBase64] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const promises = acceptedFiles.map((file) => toBase64(file));

      const images = await Promise.all(promises);
      setImagesBase64(images);
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledApp>
      <DragAndDropStyled isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the images here ...</p>
        ) : (
          <p>Drag images here, or click to select images</p>
        )}
      </DragAndDropStyled>

      <ImagePredictions imagePredictions={imagesBase64} />
    </StyledApp>
  );
}

export default App;
