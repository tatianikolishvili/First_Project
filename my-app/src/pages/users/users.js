import { object } from 'prop-types';
import { useState } from 'react';

function Users() {
  const List = [
    {
      id: 2,
      name: 'fuchsia',
      lastname: 'rose',
    },
    {
      id: 2,
      name: 'Tatia',
      lastname: 'Nikolishvili',
    },
    {
      id: 2,
      name: 'cerulean',
      lastname: 'cerulean',
    },
    {
      id: 2,
      name: 'Tatia',
      lastname: 'Nikolishvili',
    },
    {
      id: 2,
      name: 'Tatia',
      lastname: 'Nikolishvili',
    },
    {
      id: 2,
      name: 'Tatia',
      lastname: 'Nikolishvili',
    },
  ];
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(List);
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(List);
    } else {
      const filteredData = List.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setData(filteredData);
    }
  };
  return (
    <div>
      Search:
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>
        {List.map((d, i) => {
          return (
            <div key={i}>
              <b>Name: </b> {d.name} <br />
              <b>LastName: </b> {d.lastname} <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Users;
