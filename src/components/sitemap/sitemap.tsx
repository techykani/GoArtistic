import Link from 'next/link'

interface SiteMapType {
  name: string
  slug: string
  child: SiteMapType[]
}
interface SiteMapProps {
  name: string
  sitemap: SiteMapType[]
}
const SiteMap = ({ sitemap, name }: SiteMapProps) => {
  return (
    <section className="container relative ">
      <div className="mt-40 mb-20 rounded-lg lg:mt-auto lg:bg-white lg:shadow-soft lg:mx-8 lg:pt-10 lg:pb-20">
        <div className="max-w-4xl 2xl:max-w-5xl sm:mx-auto">
          <p className="mb-4">{name}</p>
          <ul className="flex flex-col gap-2 pl-4 list-disc list-inside md:gap-4">
            {sitemap.map((item) => (
              <li key={item.slug + item.name} className="text-primary-copper ">
                {item.slug ? (
                  <Link className="cursor-pointer" href={item.slug}>
                    {item.name}
                  </Link>
                ) : (
                  <span className='text-heading'>{item.name}</span>
                )}
                {item.child && item.child.length > 0 && (
                  <ul className="flex flex-col gap-2 pl-6 my-2 list-disc list-inside md:gap-4">
                    {item.child.map((child) => (
                      <li key={child.slug + child.name} className="text-primary-copper ">
                        {child.slug ? (
                          <Link className="cursor-pointer" href={child.slug}>
                            {child.name}
                          </Link>
                        ) : (
                          <span>{child.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { SiteMap }
