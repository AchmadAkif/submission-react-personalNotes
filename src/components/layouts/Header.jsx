import React from 'react';

function Header({ handleSearchQueryChange, searchQuery }) {
  return (
    <div className='flex w-full px-6 py-4 justify-between border-b-2'>
      <h1 className='font-medium text-[30px]'>Notes</h1>
      <input onChange={handleSearchQueryChange} value={searchQuery} type="text" placeholder='Cari catatan...' className='bg-[#18181B] border-2 rounded-md w-1/3 px-3' />
    </div>
  );
}

export default Header;