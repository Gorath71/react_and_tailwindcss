import React from 'react'
import data from "../data/stocks.json"
import DataDisplay from '../components/DataDisplay'

const Stocks = () => {
  return (
    <main className='flex justify-center p-4'>
      <div className='w-full max-w-screen-xl flex flex-col gap-15 pt-16 pb-16'>
        <h3 className='text-center'>Stocks</h3>
        <DataDisplay data={data} />
      </div>
    </main>
  )
}

export default Stocks