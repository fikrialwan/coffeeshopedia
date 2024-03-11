import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import CMSSidebar from "../sidebar"
describe("Sidebar", () => {
  it("render a heading", () => {
    render(<CMSSidebar />)

    const heading = screen.getByRole("heading", {
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})
