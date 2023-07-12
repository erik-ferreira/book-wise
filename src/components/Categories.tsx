"use client"

import classnames from "classnames"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import { Category } from "@/dtos/Category"

interface CategoriesProps {
  categories: Category[]
  categorySelected: string
  onChangeCategorySelected: (value: string) => void
}

export function Categories({
  categories,
  categorySelected,
  onChangeCategorySelected,
}: CategoriesProps) {
  return (
    <ToggleGroup.Root
      type="single"
      className="flex gap-3 flex-wrap list-none"
      onValueChange={onChangeCategorySelected}
    >
      {categories?.map((category) => {
        const isCategorySelected = category.id === categorySelected

        return (
          <ToggleGroup.Item
            key={category.id}
            value={category.id}
            className={classnames(
              "py-1 px-4 rounded-full flex items-center justify-center leading-short border whitespace-nowrap transition-colors hover:text-gray-100 hover:border-purple-100 hover:bg-purple-200",
              {
                "bg-purple-200 border-purple-200": isCategorySelected,
              },
              { "border-purple-100 text-purple-100": !isCategorySelected }
            )}
          >
            {category.name}
          </ToggleGroup.Item>
        )
      })}
    </ToggleGroup.Root>
  )
}
