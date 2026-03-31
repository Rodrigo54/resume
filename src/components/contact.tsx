import { address, email, phone } from 'database.json';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <address className="[font-family:var(--font-body)] text-base">
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
      </address>
      <a href={`tel:${phone}`} className="no-underline text-inherit [font-family:var(--font-body)] text-base font-extrabold leading-none">
        {phone}
      </a>
      <a href={`mailto:${email}`} className="no-underline text-inherit [font-family:var(--font-body)] text-base font-extrabold leading-none">
        {email}
      </a>
    </div>
  );
}

export default Contact;
