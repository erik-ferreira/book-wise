export interface CategoryProps {
  id: number
  label: string
  active: boolean
}

export const categoriesDefaultNavBar: CategoryProps[] = [
  {
    id: 1,
    label: "Tudo",
    active: true,
  },
  {
    id: 2,
    label: "Computação",
    active: false,
  },
  {
    id: 3,
    label: "Educação",
    active: false,
  },
  {
    id: 4,
    label: "Fantasia",
    active: false,
  },
  {
    id: 5,
    label: "Ficção científica",
    active: false,
  },
  {
    id: 6,
    label: "Horror",
    active: false,
  },
  {
    id: 7,
    label: "HQs",
    active: false,
  },
  {
    id: 8,
    label: "Suspense",
    active: false,
  },
]
