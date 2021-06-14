import React from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import Paginators from './Paginators';
import fakeFetch from '../api/fakeFetch';

function Main() {
  const [isLoading, setLoading]= React.useState(true);
  const [marvelData, setMarvelData] = React.useState([]);
  const [currentPage, setPage] = React.useState(0);
  const [filteredMarvelData, setFilteredMarvelData] = React.useState(null);
  const itemsPerPage = 20;

  // setPage callback for Paginator
  function handlePaging(newPage) {
    setPage(newPage);
  }
  
  // Filters the marvel data based on the current input in the search filter.
  function filterMarvelData(expression) {
    // If the search filter is empty, display default page 1
    if (expression === "") {
      setPage(0);
    } else {
      setPage(null);
      const filter = expression.toUpperCase();
      let newFilteredMarvelData = [];

      marvelData.forEach(item => {
        if (item.name.toUpperCase().indexOf(filter) > -1) newFilteredMarvelData.push(item);
      })

      setFilteredMarvelData(newFilteredMarvelData);
    }
  }
    
  // Hook for when user selects a new page
  React.useEffect(() => {
    const offset = (currentPage) * itemsPerPage
    setFilteredMarvelData(marvelData.slice(offset, offset+itemsPerPage));
  }, [currentPage, marvelData])

  // only fetch the api upon mount
  React.useEffect(() => {
    const response = fakeFetch();
    response
      .then(data => {
        // flatten the 2D array
        const newMarvelData = data.map(item => item.response.data.results);
        const flattenedMarvelData = [].concat.apply([], newMarvelData)
        setMarvelData(flattenedMarvelData);
        setPage(0);
        setLoading(false);
      })
      .catch(error => {
        console.warn(error);
      });
  }, [])
  
  return (
    <div className="main">
      <h1>Marvel Small App</h1>
      {isLoading ? 
      <h2>Loading . . .</h2> 
      : 
      <>
        <SearchBar handleFilter={filterMarvelData}/>
        <Table headers={["id", "image", "name", "description"]} filteredData={filteredMarvelData}/>
        {currentPage !== null &&
        <Paginators marvelData={marvelData} handlePaging={handlePaging} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        }
      </>
      }
    </div>
  );
}

export default Main;
