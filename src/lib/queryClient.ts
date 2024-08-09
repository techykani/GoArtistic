import { groq } from 'next-sanity'
import { withDimensions } from 'sanity-react-extra'

export const DOCTOR_LISTING_FIELDS = `
     ...,
`

export const getMoredoctorListQuery = ({ limit, page }: { limit: number; page: number }) => {
  const startIndex = limit * (page - 1)
  const endIndex = limit * page - 1

  const query = groq`
        *[_type == "package" && language == $locale] | order(order asc) [${startIndex}..${endIndex}] {
            ${DOCTOR_LISTING_FIELDS}
        }
    `

  return query
}

export const doctorsQuery = ({
  limit,
  page,
  sortOrder,
  sortBy,
  selectedSortByValues,
  selectedTabs,
  selectedGendersAndLanguages,
}: {
  limit: number
  page: number
  sortOrder: any
  sortBy: string
  selectedSortByValues: any
  selectedTabs?: string
  selectedSortBy?: string
  selectedGendersAndLanguages?: {
    gender: string
    ageV: string
    specificConcerns: string[]
  }
}) => {
  const specificConcerns = selectedGendersAndLanguages?.specificConcerns[0] === 'All' ? '' : selectedGendersAndLanguages?.specificConcerns.map((item) => `[specificconcern] match "*${item}*"`)
  .join(' || ')
  const gender = selectedGendersAndLanguages?.gender === 'Any' ? '' : selectedGendersAndLanguages?.gender
  const ageV = selectedGendersAndLanguages?.ageV === 'All' ? '' : selectedGendersAndLanguages?.ageV
  const startIndex = 0
  const endIndex = 7

  if (selectedTabs == '') {
    if (gender == '' && ageV == '' && specificConcerns == '') {
      return groq`
    *[_type == "package"] | order(${sortBy}) [${startIndex}..${endIndex}] {
        ${DOCTOR_LISTING_FIELDS}
        "doc_count": count(*[_type == "package"])
    }
  `
    } else {
      return groq`
    *[_type == "package" && [gender] match "*${gender}*" && [ageV] match "*${ageV}*"] | order(${sortBy})  [${startIndex}..${endIndex}] {
        ${DOCTOR_LISTING_FIELDS}
        "doc_count": count(*[_type == "package" && [gender] match "*${gender}*" && [ageV] match "*${ageV}*"])
    }
  `
    }
  } else if (selectedTabs) {
    if (gender == '' && ageV == '') {
      return groq`
      *[_type == "package" && [category] match "*${selectedTabs}*"] | order(${sortBy})  [${startIndex}..${endIndex}] {
          ${DOCTOR_LISTING_FIELDS}
          "doc_count": count(*[_type == "package" && [category] match "*${selectedTabs}*"])
      }
    `
    } else {
      return groq`
      *[_type == "package" && [category] match "*${selectedTabs}*" && [gender] match "*${gender}*" && [ageV] match "*${ageV}*"] | order(${sortBy})  [${startIndex}..${endIndex}] {
          ${DOCTOR_LISTING_FIELDS}
          "doc_count": count(*[_type == "package" && [category] match "*${selectedTabs}*" && [gender] match "*${gender}*" && [ageV] match "*${ageV}*"])
      }
    `
    }

  }

  const query = groq`
        *[_type == "package"] [${0}..${7}] {
            ${DOCTOR_LISTING_FIELDS}
            "doc_count": count(*[_type == "package"])
        }
    `
  return query
}

// search page query handler
export const queryAll = ({ searchText }: { searchText: string | string[] }) => {
  return groq`
    *[_type == 'doctor' && [name, about.description] match "*${searchText}*" ||
    _type == 'package' && [title, shortDes] match "*${searchText}*" ||
    _type == 'specialtyList' && [title, tagline] match "*${searchText}*" ||
    _type == 'insights' && [title, seo.description] match "*${searchText}*" ||
    _type == 'media' && [title, seo.description] match "*${searchText}*"] [0..9] {
      ...,
      "primaryImg": primaryImg.asset->url,
      "photo": photo.asset->url,
      "iconurl": iconurl.asset->url,
    }
  `
}

// search Popup page query handler
export const queryTitleAll = ({ searchText }: { searchText: string | string[] }) => {
  return groq`
    *[_type == 'doctor' && ([name] match "*${searchText}*") ||
    _type == 'package' && [title] match "*${searchText}*" ||
    _type == 'specialtyList' && [title] match "*${searchText}*" ||
    _type == 'insights' && [title] match "*${searchText}*" ||
    _type == 'media' && [title] match "*${searchText}*"] [0..4] {
      ...,
      "primaryImg": primaryImg.asset->url,
      "image": image.asset->url,
      "iconurl": iconurl.asset->url,
    }
  `
}
