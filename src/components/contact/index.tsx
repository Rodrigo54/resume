import * as S from './styles';
import { address, email, phone } from 'database.json';

const Contact: React.FC = () => {
  return (
    <S.ContactWrapper>
      <S.Address>{ address }</S.Address>
      <S.Phone href={`tel:${phone}`}>{ phone }</S.Phone>
      <S.Email href={`mailto:${email}`}>{ email }</S.Email>
    </S.ContactWrapper>
  );
}

export default Contact;
