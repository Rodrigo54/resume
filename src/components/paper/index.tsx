import Contact from '@components/contact';
import HeaderResume from '@components/header';
import AcademicFormation from '@components/formation';
import Courses from '@components/courses';
import Languages from '@components/langs';
import Links from '@components/links';
import Skills from '@components/skills';
import ProfessionalExperience from '@components/professional-experience';

import * as S from './styles';

const Paper: React.FC = () => {
  return (
    <S.PaperWrapper>
      <S.PaperContainer>
        <S.PaperArticle>
          <HeaderResume />
          <ProfessionalExperience />
          <AcademicFormation />
        </S.PaperArticle>
        <S.PaperAside>
          <Contact />
          <Skills />
          <Courses />
          <Languages />
          <Links />
        </S.PaperAside>
      </S.PaperContainer>
    </S.PaperWrapper>
  )
}

export default Paper;
