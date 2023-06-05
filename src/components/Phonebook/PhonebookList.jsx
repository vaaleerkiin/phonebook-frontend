import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import BeatLoader from 'react-spinners/BeatLoader';
import { PhonebookItem } from './PhoneBookItem';
import { useEffect } from 'react';

export const PhonebookList = () => {
  const filter = useSelector(state => state.filter);
  const { data, isLoading, error, refetch, isUninitialized } =
    useGetContactsQuery({});
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!isUninitialized) {
      refetch();
    }
  }, [isUninitialized, refetch, token]);

  const visibleContacts = () => {
    return [...data].filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && (
        <BeatLoader
          cssOverride={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      )}
      {data && !isLoading && (
        <ul style={{ width: '100%', padding: 0 }}>
          {visibleContacts().map(({ name, number, id }) => (
            <PhonebookItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {error && toast.error(error.error) && null}
    </>
  );
};
