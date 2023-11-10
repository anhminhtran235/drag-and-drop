import styled from 'styled-components';

const StyledImagePrediction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: 250px;
    border-radius: 10px;
  }

  p {
    margin-bottom: 0;
    font-weight: bold;
  }

  .result {
    color: ${(props) => (props.hasTumor ? 'red' : 'green')};
  }
`;

const ImagePrediction = ({ imageBase64, hasTumor }) => {
  return (
    <StyledImagePrediction hasTumor={hasTumor}>
      <img src={imageBase64} />
      <p>
        Has tumor: <span className='result'>{hasTumor ? 'Yes' : 'No'}</span>
      </p>
    </StyledImagePrediction>
  );
};

export default ImagePrediction;
