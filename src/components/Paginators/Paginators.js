import React from 'react';
import './Paginators.css'

function Paginators(props) {
  const {
    marvelData,
    handlePaging,
    itemsPerPage,
    currentPage,
    ...moreProps
  } = props;

  function renderContent(){
    const numPages = Math.ceil(marvelData.length / itemsPerPage);
    const paginators = []
    for (let i = 0; i < numPages; i++) {
      paginators.push(
        <button
          onClick={() => handlePaging(i)}
          className={currentPage === i ? 'button-selected' : null}
        >
        {i+1}
        </button>
      )
    }
    return paginators;
  }


  return (
    <>
    {renderContent()}
    </>
  );
}

export default Paginators;
