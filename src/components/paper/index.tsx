import Contact from '@components/contact';
import HeaderResume from '@components/header';
import AcademicFormation from '@components/formation';
import Courses from '@components/courses';
import Languages from '@components/langs';
import Links from '@components/links';
import Skills from '@components/skills';
import ProfessionalExperience from '@components/professional-experience';
import { Print } from '@styled-icons/fluentui-system-regular/Print';
import { Github } from '@styled-icons/boxicons-logos/Github';

import * as S from './styles';

const Paper: React.FC = () => {
  const print = () => {
    window.print()
  }

  const link = () => {
    window.open('https://github.com/Rodrigo54/resume', '_blank', 'noopener noreferrer')
  }

  return (
    <S.PaperWrapper>
      <S.ActionsContainer>
        <S.ActionButton onClick={() => print()}>
          <Print size={36} />
        </S.ActionButton>
        <S.ActionButton onClick={() => link()}>
          <Github size={30} />
        </S.ActionButton>
      </S.ActionsContainer>
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
      <S.ActionsContainer />
    </S.PaperWrapper>
  )
}

export default Paper;
