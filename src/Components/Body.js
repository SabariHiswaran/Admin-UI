import React from 'react'
import SearchBar from './SearchBar'

import {  useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMembers } from '../Utils/fetchMembersSlice';
import { MEMBERS_API } from '../Utils/constants';


const Body = () => {

  const dispatch = useDispatch()

  const selector = useSelector((store) =>store.fetchMembersSlice)
  console.log(selector.membersData)
  useEffect(() => {
    dispatch(fetchMembers(MEMBERS_API))
     
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return  (
    <>

    {selector.loading && <div> Loading ..</div>}
    {!selector.loading && selector.error ? <div> We are facing some unexpected error. Please try again after some time. ( {selector.error} )</div> : null }
    {!selector.loading && selector.membersData.length > 0 ? 
        <SearchBar membersData={selector.membersData} /> 
    : null}



    </>
  )
}

export default Body