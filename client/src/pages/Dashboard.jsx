import React from 'react'
import { FormAffectation } from '../components/Admin_F/FormAffectation'
import { FormPersonne } from '../components/Admin_F/FormPersonne'
import Table from '../components/Table/Table'

export const Dashboard = () => {
  return (
    <div>
        <FormAffectation/>
        <FormPersonne />
        <Table/>
    </div>
  )
}
