"use client"

import { useState } from "react"
import classnames from "classnames"

import { CategoryProps, categoriesDefaultNavBar } from "../defaults/navbar"

export function NavBar() {
  const [categoriesFiltered, setCategoriesFiltered] = useState<CategoryProps[]>(
    categoriesDefaultNavBar
  )

  function handleToggleCategoryActive(id: number) {
    setCategoriesFiltered((prevState) => {
      const listCategoriesUpdated = prevState.map((category) => {
        if (category.id === id) {
          return { ...category, active: !category.active }
        }

        return category
      })

      return listCategoriesUpdated
    })
  }

  return (
    <div>
      <ul className="flex gap-3">
        {categoriesFiltered.map((category) => (
          <li key={category.id}>
            <button
              className={classnames(
                "py-1 px-4 rounded-full flex items-center justify-center leading-short border transition-colors hover:text-gray-100 hover:border-purple-100 hover:bg-purple-200",
                { "bg-purple-200 border-purple-200": category.active },
                { "border-purple-100 text-purple-100": !category.active }
              )}
              onClick={() => handleToggleCategoryActive(category.id)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
