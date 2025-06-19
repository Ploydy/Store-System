import React from 'react'
import Image from 'next/image'
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils'
import { DeleteProduct, UpdateProduct } from './buttons'


export default function table() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/* {invoices?.map((invoice) => ( */}
            <div
              /* key={invoice.id} */
              className="mb-2 w-full rounded-md bg-white p-4"
            >
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <Image
                      src='/products/1.jpg'
                      className="mr-2 rounded-full"
                      width={28}
                      height={28}
                      alt={`'s profile picture`}
                    />
                    <p>product name</p>
                  </div>
                  <p className="text-sm text-gray-500">product</p>
                </div>
                product status
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-xl font-medium">
                    {formatCurrency(100)}
                  </p>
                  <p>{formatDateToLocal('1')}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <UpdateProduct id={'id'} />
                  <DeleteProduct id={'id'} />
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* {invoices?.map((invoice) => ( */}
              <tr
                /* key={invoice.id} */
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src='/products/1.jpg'
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt={`${'product name'}'s profile picture`}
                    />
                    <p>product name</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  product email
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {formatCurrency(1999)}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {formatDateToLocal('1')}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {/* <InvoiceStatus status={invoice.status} /> */} product status
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <UpdateProduct id={'id'} />
                    <DeleteProduct id={'id'} />
                  </div>
                </td>
              </tr>
              {/*  ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
