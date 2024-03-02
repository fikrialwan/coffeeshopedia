import type { PaginationState, Table } from "@tanstack/react-table"
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
  pagination: PaginationState
}

function PaginationList<TData>({ table, pagination }: PaginationProps<TData>) {
  if (table.getPageCount() > 7) {
    if (pagination.pageIndex < 4) {
      return (
        <>
          {[...Array(5)].map((_, index: number) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={pagination.pageIndex === index}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (index !== pagination.pageIndex) {
                    table.setPageIndex(index)
                  }
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                table.setPageIndex(table.getPageCount() - 1)
              }}
            >
              {table.getPageCount()}
            </PaginationLink>
          </PaginationItem>
        </>
      )
    } else if (table.getPageCount() - 4 < pagination.pageIndex) {
      return (
        <>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                table.setPageIndex(0)
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {[...Array(4)].map((_, index: number) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={
                  pagination.pageIndex === table.getPageCount() + index - 4
                }
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (
                    table.getPageCount() + index - 4 !==
                    pagination.pageIndex
                  ) {
                    table.setPageIndex(table.getPageCount() + index - 4)
                  }
                }}
              >
                {table.getPageCount() + index - 3}
              </PaginationLink>
            </PaginationItem>
          ))}
        </>
      )
    } else {
      return (
        <>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                table.setPageIndex(0)
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {[...Array(3)].map((_, index: number) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={
                  pagination.pageIndex === pagination.pageIndex + index - 1
                }
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (
                    pagination.pageIndex + index - 1 !==
                    pagination.pageIndex
                  ) {
                    table.setPageIndex(pagination.pageIndex + index - 1)
                  }
                }}
              >
                {pagination.pageIndex + index}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                table.setPageIndex(table.getPageCount() - 1)
              }}
            >
              {table.getPageCount()}
            </PaginationLink>
          </PaginationItem>
        </>
      )
    }
  } else {
    return (
      <>
        {[...Array(table.getPageCount())].map((_, index: number) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={pagination.pageIndex === index}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                table.setPageIndex(index)
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </>
    )
  }
}

export default function PaginationComp<TData>({
  table,
  pagination,
}: PaginationProps<TData>) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (table.getCanPreviousPage()) {
                table.previousPage()
              }
            }}
          />
        </PaginationItem>
        <PaginationList pagination={pagination} table={table} />
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
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
