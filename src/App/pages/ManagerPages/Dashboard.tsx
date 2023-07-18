import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <main className='h-full overflow-y-auto'>
      <div className='container mx-auto grid px-6'>
        <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Dashboard</h2>
        {/* Cards */}
        <div className='mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {/* Card */}
          <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
            <div className='mr-4 rounded-full bg-orange-100 p-3 text-orange-500 dark:bg-orange-500 dark:text-orange-100'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
              </svg>
            </div>
            <div>
              <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Tổng số khách hàng</p>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>6389</p>
            </div>
          </div>
          {/* Card */}
          <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
            <div className='mr-4 rounded-full bg-green-100 p-3 text-green-500 dark:bg-green-500 dark:text-green-100'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div>
              <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Tổng Doanh thu</p>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>46,760.89 VNĐ</p>
            </div>
          </div>
          {/* Card */}
          <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
            <div className='mr-4 rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-blue-100'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
              </svg>
            </div>
            <div>
              <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Sản phẩm</p>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>376</p>
            </div>
          </div>
          {/* Card */}
          <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
            <div className='mr-4 rounded-full bg-teal-100 p-3 text-teal-500 dark:bg-teal-500 dark:text-teal-100'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div>
              <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Pending contacts</p>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>35</p>
            </div>
          </div>
        </div>
        {/* New Table */}
        <div className='shadow-xs w-full overflow-hidden rounded-lg'>
          <div className='w-full overflow-x-auto'>
            <table className='whitespace-no-wrap w-full'>
              <thead>
                <tr className='border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400'>
                  <th className='px-4 py-3'>Client</th>
                  <th className='px-4 py-3'>Amount</th>
                  <th className='px-4 py-3'>Status</th>
                  <th className='px-4 py-3'>Date</th>
                </tr>
              </thead>
              <tbody className='divide-y bg-white dark:divide-gray-700 dark:bg-gray-800'>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Hans Burger</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>10x Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 863.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                      Approved
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Jolina Angelie</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Unemployed</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 369.95</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-orange-100 px-2 py-1 font-semibold leading-tight text-orange-700 dark:bg-orange-600 dark:text-white'>
                      Pending
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Sarah Curry</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Designer</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 86.00</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700 dark:bg-red-700 dark:text-red-100'>
                      Denied
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Rulia Joberts</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Actress</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 1276.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                      Approved
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Wenzel Dashington</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Actor</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 863.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-gray-100 px-2 py-1 font-semibold leading-tight text-gray-700 dark:bg-gray-700 dark:text-gray-100'>
                      Expired
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Dave Li</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Influencer</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 863.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                      Approved
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Maria Ramovic</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Runner</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 863.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                      Approved
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Hitney Wouston</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>Singer</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 863.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                      Approved
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      {/* Avatar with inset shadow */}
                      <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                        <img
                          className='h-full w-full rounded-full object-cover'
                          src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                          alt=''
                          loading='lazy'
                        />
                        <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                      </div>
                      <div>
                        <p className='font-semibold'>Hans Burger</p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>10x Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>$ 863.45</td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                      Approved
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>6/10/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='grid border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:grid-cols-9'>
            <span className='col-span-3 flex items-center'>Showing 21-30 of 100</span>
            <span className='col-span-2' />
            {/* Pagination */}
            <span className='col-span-4 mt-2 flex sm:mt-auto sm:justify-end'>
              <nav aria-label='Table navigation'>
                <ul className='inline-flex items-center'>
                  <li>
                    <button
                      className='focus:shadow-outline-purple rounded-md rounded-l-lg px-3 py-1 focus:outline-none'
                      aria-label='Previous'
                    >
                      <svg aria-hidden='true' className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
                        <path
                          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                          clipRule='evenodd'
                          fillRule='evenodd'
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>1</button>
                  </li>
                  <li>
                    <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>2</button>
                  </li>
                  <li>
                    <button className='focus:shadow-outline-purple rounded-md border border-r-0 border-purple-600 bg-purple-600 px-3 py-1 text-white transition-colors duration-150 focus:outline-none'>
                      3
                    </button>
                  </li>
                  <li>
                    <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>4</button>
                  </li>
                  <li>
                    <span className='px-3 py-1'>...</span>
                  </li>
                  <li>
                    <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>8</button>
                  </li>
                  <li>
                    <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>9</button>
                  </li>
                  <li>
                    <button
                      className='focus:shadow-outline-purple rounded-md rounded-r-lg px-3 py-1 focus:outline-none'
                      aria-label='Next'
                    >
                      <svg className='h-4 w-4 fill-current' aria-hidden='true' viewBox='0 0 20 20'>
                        <path
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                          fillRule='evenodd'
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
        {/* Charts */}
        <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Charts</h2>
        <div className='mb-8 grid gap-6 md:grid-cols-2'>
          <div className='shadow-xs min-w-0 rounded-lg bg-white p-4 dark:bg-gray-800'>
            <h4 className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Revenue</h4>
            <canvas id='pie' />
            <div className='mt-4 flex justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400'>
              {/* Chart legend */}
              <div className='flex items-center'>
                <span className='mr-1 inline-block h-3 w-3 rounded-full bg-blue-500' />
                <span>Shirts</span>
              </div>
              <div className='flex items-center'>
                <span className='mr-1 inline-block h-3 w-3 rounded-full bg-teal-600' />
                <span>Shoes</span>
              </div>
              <div className='flex items-center'>
                <span className='mr-1 inline-block h-3 w-3 rounded-full bg-purple-600' />
                <span>Bags</span>
              </div>
            </div>
          </div>
          <div className='shadow-xs min-w-0 rounded-lg bg-white p-4 dark:bg-gray-800'>
            <h4 className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Traffic</h4>
            <canvas id='line' />
            <div className='mt-4 flex justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400'>
              {/* Chart legend */}
              <div className='flex items-center'>
                <span className='mr-1 inline-block h-3 w-3 rounded-full bg-teal-600' />
                <span>Organic</span>
              </div>
              <div className='flex items-center'>
                <span className='mr-1 inline-block h-3 w-3 rounded-full bg-purple-600' />
                <span>Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard