import styled from 'styled-components';
import ImagePrediction from './ImagePrediction';

const StyledImagePredictions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  margin-top: 20px;
`;

const ImagePredictions = ({ imagePredictions }) => {
  return (
    <StyledImagePredictions>
      {imagePredictions.map((imageBase64, index) => (
        <ImagePrediction
          key={index}
          imageBase64={imageBase64}
          hasTumor={index % 2 === 0}
        />
      ))}
    </StyledImagePredictions>
  );
};

export default ImagePredictions;
