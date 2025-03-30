import React from 'react'

const Plain = () => {
  return (
    <>
    <div className='flex sticky top-[calc(100vh_-48px_-16px)] flex-col h-12 border-t px-2 border-gray-500 justify-end text-xs'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-bold text-gray-300'>Enterprise</p>
                <p className='text-gray-400'>Pay as you go</p>
            </div>

            <button className='px-2 py-1.5 font-medium bg-gray-200 hover:bg-gray-600 cursor-pointer hover:text-white transition-colors rounded'>
                Support
            </button>
        </div>
    </div>
    </>
  )
}

export default Plain