import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';

interface Props{
    data:any,
    columns:string[]
}

const TableWithPaginationAndSorting:React.FC<Props> = ({data,columns}) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const sortedData = data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    }
    return a[sortBy] < b[sortBy] ? 1 : -1;
  });

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = sortedData.slice(indexOfFirstData, indexOfLastData);

  let pageNumbers:number[] = [];
  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderColumns = columns.map((item) => {
    return (
        <>
            <th onClick={() => handleSort(item)}>
                Name {sortBy === item ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            );
        </>
  )});

  return (
    <>
      <Table striped bordered hover>
        <thead>
            <tr>
               {renderColumns}
            </tr>
          {/* <tr>
            <th onClick={() => handleSort('name')}>
              Name {sortBy === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => handleSort('age')}>
              Age {sortBy === 'age' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
          </tr> */}
        </thead>
        <tbody>
          {currentData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default TableWithPaginationAndSorting
