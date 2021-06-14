import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const {
    handleFilter,
    ...moreProps
  } = props;

  function handleChange(event) {
    setSearchText(event.target.value);
    handleFilter(event.target.value);
  }

  const [searchText, setSearchText] = React.useState("");
  return (
   <form>
     <input type="text" value={searchText} placeholder="Search" onChange={handleChange}/>
   </form>
  );
}

export default SearchBar;
