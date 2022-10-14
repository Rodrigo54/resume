import Contact from '@components/contact';
import Courses from '@components/courses';
import AcademicFormation from '@components/formation';
import HeaderResume from '@components/header';
import Languages from '@components/langs';
import Links from '@components/links';
import ProfessionalExperience from '@components/professional-experience';
import Skills from '@components/skills';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Print } from '@styled-icons/fluentui-system-regular/Print';
import { DarkMode } from '@styled-icons/material-outlined/DarkMode';
import { LightMode } from '@styled-icons/material-outlined/LightMode';
import { useThemeCss } from '@utils/theme';

import * as S from './styles';



const Paper: React.FC = () => {

  const [theme, setTheme] = useThemeCss('dark');

  const isDarkMode = theme === 'dark';

  const print = () => {
    window.print()
  }

  const link = () => {
    window.open('https://github.com/Rodrigo54/resume', '_blank', 'noopener noreferrer')
  }

  const setPreferredTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <S.PaperWrapper>
      <S.ActionsContainer>
        <S.ActionButton onClick={() => print()}>
          <Print size={36} />
        </S.ActionButton>
        <S.ActionButton onClick={() => link()}>
          <Github size={30} />
        </S.ActionButton>
        <S.ActionButton onClick={() => setPreferredTheme()}>
          {isDarkMode ? <DarkMode size={30}/> : <LightMode size={30}/>}
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
