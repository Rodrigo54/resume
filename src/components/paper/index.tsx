import * as S from './styles';

const Paper: React.FC = ({ children }) => {
  return (
    <S.PaperWrapper>
      <S.PaperContainer>
        { children }
      </S.PaperContainer>
    </S.PaperWrapper>
  )
}

export default Paper;
