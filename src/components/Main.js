import React from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import fakeFetch from '../api/fakeFetch';

async function getData() {
  const response = await fakeFetch();
  console.log(response);
  return response[0].response.data.results;
}

function Main() {
  const [isLoading, setLoading]= React.useState(true);
  const [marvelData, setMarvelData] = React.useState([]);
  const response = fakeFetch();
  response
    .then(data => {
      setLoading(false);

      // flatten the 2D array
      const newMarvelData = data.map(item => item.response.data.results);
      const flattenedMarvelData = [].concat.apply([], newMarvelData)
      setMarvelData(flattenedMarvelData);
      
    })
    .catch(error => {
      console.warn(error);
    });

  return (
    <div className="main">
      <h1>Marvel Small App</h1>
      {isLoading ? 
      <h2>Loading . . .</h2> 
      : 
      <>
        <Table headers={["id", "image", "name", "description"]} tableData={marvelData} />
      </>
      }
    </div>
  );
}

export default Main;
