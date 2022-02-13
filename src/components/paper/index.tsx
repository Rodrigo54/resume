import Contact from '@components/contact';
import HeaderResume from '@components/header';
import ProfessionalExperience from '@components/professional-experience';

import * as S from './styles';

const Paper: React.FC = ({ children }) => {
  return (
    <S.PaperWrapper>
      <S.PaperContainer>
        <S.PaperArticle>
          <HeaderResume />
          <ProfessionalExperience />
        </S.PaperArticle>
        <S.PaperAside>
          <Contact />
        </S.PaperAside>
      </S.PaperContainer>
    </S.PaperWrapper>
  )
}

export default Paper;
