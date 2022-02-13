import * as S from './styles';
import { fullName, resume } from 'database.json';

const HeaderResume: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Name>{ fullName }</S.Name>
      <S.Resume>{ resume }</S.Resume>
    </S.HeaderWrapper>
  )
}

export default HeaderResume;
