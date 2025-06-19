import { lusitana } from '@/app/ui/fonts'
import { CreateProduct } from '@/app/ui/products/buttons'
import Table from '@/app/ui/products/table'
import Search from '@/app/ui/search'
import React from 'react'

export default function Products() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateProduct />
      </div>
      <Table />
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
        </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        Pagination
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  )
}
