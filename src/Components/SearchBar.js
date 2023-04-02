import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import { membersToDisplay } from '../Utils/constants';
import Pages from './Pages';
import TableForMembers from './TableForMembers';
import useFetchMembers from '../Utils/useFetchMembers';

const SearchBar = ({ membersData }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const [searchText, setSearchText] = useState("")

  const filterMembersData = useFetchMembers()

  const [filteredMembers, setFilteredMembers] = useState([])

  const passingMembersData = searchText.length === 0 ? membersData : filteredMembers

  const membersToBeListed = membersToDisplay(passingMembersData, currentPage)


  const updatePageNumber = (number) => {
    setCurrentPage(number)
  }

  const filterMembers = (filterMembersData, filterText) => {

    const filteredData = filterMembersData?.filter(item => (item?.name?.toLowerCase().includes(filterText?.toLowerCase())))
    setFilteredMembers(filteredData)
  }



  return (

    <>

      <Container className='searchContainer'>

        <input
          type="search"
          placeholder='Search by name,email or role'
          className='searchBox'
          onChange={(e) => {

            filterMembers(filterMembersData, e.target.value)
            setSearchText(e.target.value)

          }}
        />

      </Container>

      <TableForMembers
        membersData={membersToBeListed}
      />

      <Pages
        membersData={passingMembersData}
        currentPage={currentPage}
        updatePageNumber={updatePageNumber}
        searchText={searchText}
      />
    </>
  )
}

export default SearchBar