import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const {
    handleFilter,
    ...moreProps
  } = props;
  const [searchText, setSearchText] = React.useState("");
  
  function handleChange(event) {
    setSearchText(event.target.value);
    handleFilter(event.target.value);
  }

  return (
   <form>
     <input type="text" value={searchText} placeholder="Search" onChange={handleChange}/>
   </form>
  );
}

export default SearchBar;
