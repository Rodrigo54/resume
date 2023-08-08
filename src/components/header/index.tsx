import * as S from './styles';
import { fullName, resume } from 'database.json';

const HeaderResume: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Avatar src="https://avatars.githubusercontent.com/u/8932920?v=4" alt="Avatar" />
      <div>
        <S.Name>{ fullName }</S.Name>
        <S.Resume>{ resume }</S.Resume>
      </div>
    </S.HeaderWrapper>
  )
}

export default HeaderResume;
