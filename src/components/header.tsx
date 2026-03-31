import { fullName, resume } from 'database.json';

const HeaderResume: React.FC = () => {
  return (
    <header className="flex flex-row flex-nowrap items-center gap-[20px]">
      <img
        src="https://avatars.githubusercontent.com/u/8932920?v=4"
        alt="Avatar"
        className="w-[96px] h-[96px] rounded-full"
      />
      <div>
        <h1 className="[font-family:var(--font-title)] text-[1.8rem] font-extrabold leading-none mb-[10px] text-[var(--color1)]">
          {fullName}
        </h1>
        <p className="[font-family:var(--font-body)] text-[0.9rem] leading-[1.1]">
          {resume}
        </p>
      </div>
    </header>
  );
}

export default HeaderResume;
