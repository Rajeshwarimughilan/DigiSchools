import { useEffect } from 'react'

const SITE_NAME = 'DigiSchool Corporation'

/**
 * Sets the document title and meta description for each route.
 * No library required — pure useEffect on document head.
 */
function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    if (description) {
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default PageMeta
