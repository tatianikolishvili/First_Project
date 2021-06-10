import { Button } from 'bootstrap';
import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.SearchBox} action="">
        <input onChange={props.handleSearch} type="text" />
        <Button type="submit">Search</Button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBox;
