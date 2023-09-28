import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
export const Contacts = () => {
  return (
    <>
      <ContactForm></ContactForm>

      <ContactsList>
        <Filter />
      </ContactsList>
    </>
  );
};
