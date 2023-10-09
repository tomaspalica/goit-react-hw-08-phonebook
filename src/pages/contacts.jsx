import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
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
