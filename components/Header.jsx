import { createClient } from "@/prismicio"
import { PrismicText } from "@prismicio/react"
import { PrismicNextLink } from "@prismicio/next"

export default async function Header(){
  const client = createClient()
  const nav = await client.getSingle('global_nav')

  return (
    <div className="h-24 flex justify-center items-center font-semibold bg-greenGrey">
      <div className="container flex justify-between">
        <span className="text-xl leading-6">
          <PrismicText field={nav.data.company_name} />
        </span>
        <ul className="flex gap-8">
          {nav.data.menu_items.map((item) => {
            return (
              <li key={JSON.stringify(item)}>
                <PrismicNextLink field={item.menu_link}>
                  {item.menu_label}
                </PrismicNextLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
