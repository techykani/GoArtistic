import { groq } from 'next-sanity'
import { withDimensions } from 'sanity-react-extra'

export const intlTypeQuery = (
  schemaType: string | [string, string, string] | [string, string],
  filters: string | boolean = true,
) => {
  if (Array.isArray(schemaType)) {
    const [type, range, order = 'order(_createdAt)'] = schemaType

    return groq`*[_type == "${type}" && language == "en-my" && ${filters}] | ${order} ${range}`
  } else {
    return groq`coalesce(
		*[_type == "${schemaType}" && language == "en-my" && ${filters}][0],
		*[_type == "${schemaType}" && language == "en-my" && ${filters}][0],
		*[_type == "${schemaType}" && ${filters}][0],
	)`
  }
}

export const siteQuery = groq`${intlTypeQuery('site')} {
    	...,
		"logo": ${withDimensions('logo')},
		"favicon" : favicon.asset->url,	
		navTop {
			...,
			location {
			  ...,
			  "icon": icon.asset->url,
			},
			language {
			  ...,
			  "icon":icon.asset->url,
			},  
			announcement {
			  ...,
			}
		},	

		"listingItems" : *[(_type =='centresOfExcellence' && language == $locale || _type == 'clinicalService' && language == $locale || _type == 'package' && language == $locale && (now() <= endDate || !defined(endDate)) || _type == 'medicalSpecialty' && language == $locale && isVisible == true || _type == 'procedure' && language == $locale && defined(scrollspySections.title))] | order(coalesce(endDate, "1970-01-01") asc, title asc) {
			"slug": slug.current,
			title,
			_id,
			_type,
		},

		footer {
			...,
			address {
				...,
				iconLinks[] {
					...,
					"icon": ${withDimensions('icon')},
				}
			},
			contact {
				...,
				iconLinks[] {
					...,
					"icon": ${withDimensions('icon')},
				}
			},
			footerBottom[] {
				    ...,

							"icon": ${withDimensions('icon')},
						}
		},
		notificationBar {
			...,
			"icon": ${withDimensions('icon')},
		},
}`

export const contactDataQuery = groq`${intlTypeQuery('contactData')} {
    ...,
    "form": form {
      ...,
      "socialButtons": socialButtons[]->
    }
  }`

export const pageQuery = (query?: string) => groq`{
	"site": ${siteQuery},
    "page": ${query}
  }`
