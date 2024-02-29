import type { Table } from "@tanstack/react-table"
import React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/lib/components/ui/pagination"

interface PaginationProps<TData> {
  table: Table<TData>
}

export default function PaginationComp<TData>({
  table,
}: PaginationProps<TData>) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => {
              if (table.getCanPreviousPage()) {
                table.previousPage()
              }
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => table.setPageIndex(0)}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => {
              if (table.getCanNextPage()) {
                table.nextPage()
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
