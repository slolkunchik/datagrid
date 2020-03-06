import React from 'react'
import Table from '../components/table/table'
import { useSelector } from 'react-redux'

export default function TableContainer() {
  const { studentsData } = useSelector(state => ({
    studentsData: state.students.data
  }))

  return (
    <Table rows={studentsData} />
  );
}
