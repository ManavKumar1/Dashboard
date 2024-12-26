import React from "react";
import "./CustomTable.scss";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { truncateText } from "../../utils/Truncate";
import usePagination from "../../CustomHooks/usePagination";
const CustomTable = ({
  data,
  headers,
  itemsPerPage = 10,
  truncateLength = 20,
  onRowClick,
  showActions = true,
}) => {
  const {
    currentPage,
    totalPages,
    paginatedData,
    handleNextPage,
    handlePrevPage,
  } = usePagination(data);

  return (
    <div className='custom-table'>
      <table className='users-table'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
            {showActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <tr key={item.id}>
                {headers.map((header, index) => (
                  <td key={index}>
                    {item[header] !== undefined
                      ? header === "address"
                        ? truncateText(item[header], truncateLength)
                        : item[header]
                      : "-"}
                  </td>
                ))}
                {showActions && (
                  <td>
                    <Link to={`/user-details/${item.id}`}>
                      <CustomButton
                        width='75px'
                        height='40px'
                        color='#fff'
                        bgColor='#007bff'
                        borderRadius='15px'
                      >
                        View
                      </CustomButton>
                    </Link>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length + (showActions ? 1 : 0)}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='pagination-controls'>
        <CustomButton
          width='100px'
          height='35px'
          color='#fff'
          bgColor='#007bff'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </CustomButton>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <CustomButton
          width='100px'
          height='35px'
          color='#fff'
          bgColor='#007bff'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default CustomTable;
