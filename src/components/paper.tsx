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

  const actionBtn = "w-[40px] h-[40px] flex flex-row flex-nowrap items-center justify-center bg-transparent border-none rounded-full text-[var(--color1)] cursor-pointer p-0 focus:outline-2 focus:outline-transparent focus:outline-offset-2 hover:bg-[var(--color1-shade)] hover:text-[var(--color1-contrast)]";

  return (
    <div className="flex flex-row flex-nowrap items-start justify-center min-h-screen bg-[image:var(--background-gradient)] py-[5rem] px-0">
      <div className="py-[50px] px-0 w-[70px] flex flex-col items-center justify-center gap-[10px]">
        <button className={actionBtn} onClick={() => print()}>
          <Print size={36} />
        </button>
        <button className={actionBtn} onClick={() => link()}>
          <Github size={30} />
        </button>
        <button className={actionBtn} onClick={() => setPreferredTheme()}>
          {isDarkMode ? <DarkMode size={30}/> : <LightMode size={30}/>}
        </button>
      </div>
      <main className="p-[40px] m-0 w-[85vw] max-w-[900px] bg-[var(--paper-background)] shadow-[var(--paper-shadow)] grid grid-cols-[1fr_0.5fr] gap-[30px]">
        <article className="flex flex-col gap-[5px]">
          <HeaderResume />
          <ProfessionalExperience />
          <AcademicFormation />
        </article>
        <aside className="flex flex-col gap-[10px]">
          <Contact />
          <Skills />
          <Courses />
          <Languages />
          <Links />
        </aside>
      </main>
      <div className="py-[50px] px-0 w-[70px]" />
    </div>
  );
}

export default Paper;
