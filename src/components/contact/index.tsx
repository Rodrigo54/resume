import * as S from './styles';
import { address, email, phone } from 'database.json';

const Contact: React.FC = () => {
  return (
    <S.ContactWrapper>
      <S.Address>
        <p>
          <span>{address.street}, </span>
          <span>N° {address.streetNumber}</span>
        </p>
        <p>
          <span>{address.complement}</span>
        </p>
        <p>
          <span>{address.neighborhood} - </span>
          <span>{address.city} - </span>
          <span>{address.state} - </span>
          <span>{address.country}</span>
        </p>
        <p>
          <span>CEP: </span>
          <span>{address.zipCode}</span>
        </p>
      </S.Address>
      <S.Phone href={`tel:${phone}`}>{ phone }</S.Phone>
      <S.Email href={`mailto:${email}`}>{ email }</S.Email>
    </S.ContactWrapper>
  );
}

export default Contact;
