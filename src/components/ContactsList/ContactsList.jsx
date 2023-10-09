import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { useEffect } from 'react';
import { fetchcontacts, deleteContacts } from 'redux/operations';
import { selectError, selectFilterNames, selectLoading } from 'redux/selectors';
import { StyledButton } from 'styledTags';

export const ContactsList = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const contactsError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch]);

  const contactDelete = el => {
    console.log(el.target.id);
    dispatch(deleteContacts(el.target.id));
  };

  const filteredNames = useSelector(selectFilterNames);

  return (
    <div>
      <h2>Contacts</h2>
      {children}
      {contactsError && <div>{contactsError}</div>}
      {loading && <div> Loading... </div>}
      <ul className={css.nameList}>
        {filteredNames.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <StyledButton
              className={css.listButton}
              id={id}
              name={name}
              onClick={contactDelete}
            >
              delete
            </StyledButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
