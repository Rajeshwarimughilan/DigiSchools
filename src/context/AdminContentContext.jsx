/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  aboutCapabilities,
  achievementCards,
  awardHighlights,
  fundingMilestones,
  latestNews,
  media,
  outcomeStats,
  partnerLogos,
  productPlatforms,
  programCatalog,
} from '../content/siteData'

const ADMIN_SESSION_KEY = 'digischool.admin.session'
const ADMIN_CONTENT_KEY = 'digischool.admin.content.v1'

const defaultManagedContent = {
  homeFlagshipInitiatives: [
    {
      title: 'ATMAN-80 - Smart Agriculture with IIT Bombay and Nandha Engineering College',
      text: 'A landmark IoT-driven precision farming initiative backed by Rs 80 Lakhs in support. DigiSchool\'s ATMAN-80 deployment uses real-time sensor networks, drone monitoring, and automated irrigation systems to redefine agricultural intelligence at scale.',
      image: media.lab,
      reverse: false,
    },
    {
      title: 'SCSTE Award-Winning R&D and Research Funding',
      text: 'Recognized by SCSTE for best-in-class project innovation, DigiSchool received seed funding that ignited its R&D division. Over 8 years, this recognition grew into 4+ Crores in cumulative funding across government, industrial, and institutional research programs.',
      image: media.innovation,
      reverse: true,
    },
  ],
  homeCorePlatforms: productPlatforms,
  homeLatestNews: latestNews,
  homeAchievements: achievementCards,
  aboutCapabilities,
  schoolCurriculum: programCatalog,
  schoolMentionables: [
    {
      title: 'AI Lab Showcases',
      description: 'Students present guided AI lab outcomes in institutional exhibitions and community demos.',
      image: media.classroom,
    },
    {
      title: 'STEM Build Challenges',
      description: 'Hands-on engineering build sprints that improve teamwork, logic, and presentation confidence.',
      image: media.robotics,
    },
    {
      title: 'Teacher Enablement Wins',
      description: 'Faculty implementation checkpoints ensuring classroom continuity and better learner engagement.',
      image: media.books,
    },
    {
      title: 'Language Confidence Growth',
      description: 'I Speak English classroom routines improving communication outcomes for young learners.',
      image: media.students,
    },
  ],
  collegeNotables: [
    {
      title: 'Prototype Demo Days',
      description: 'Campus demo days where student projects are reviewed for product and funding readiness.',
      image: media.students,
    },
    {
      title: 'Publication Track Support',
      description: 'Structured mentoring for journals and conference submissions with documentation quality checks.',
      image: media.coding,
    },
    {
      title: 'IP and Patent Clinics',
      description: 'Focused workshops to identify novelty and convert technical work into IP-ready submissions.',
      image: media.innovation,
    },
    {
      title: 'Industry-Aligned Builds',
      description: 'Project milestones mapped to real industry problem statements and implementation constraints.',
      image: media.robotics,
    },
  ],
  rdProgramStreams: programCatalog,
  supportFaq: [
    {
      q: 'How do I enquire about a school or college program?',
      a: 'Email us at info@digischl.com or call +91 99421 07795 with your institution name, grade range, and the program you are interested in. Our team will respond within one business day.',
    },
    {
      q: 'Can DigiSchool design a custom STEM or robotics lab for my school?',
      a: 'Yes. We provide turnkey lab infrastructure - planning, procurement, installation, teacher training, and ongoing support. Reach out via phone or email to begin the process.',
    },
    {
      q: 'I have a pending order from the old platform. How do I follow up?',
      a: 'Use the Cart & Checkout legacy link in the Archived Utility Pages section below, or email info@digischl.com directly with your order reference.',
    },
    {
      q: 'How do I get technical support for the G-BroBoard or classroom hardware?',
      a: 'Contact our team via WhatsApp at +91 99421 07795 for fastest response on hardware issues. Alternatively email us with photos and a description of the issue.',
    },
  ],
  impactStats: outcomeStats,
  impactFundingJourney: fundingMilestones,
  impactRecognitions: awardHighlights,
  impactMilestones: achievementCards,
  trustedSchools: partnerLogos,
}

const sectionOrder = [
  'homeFlagshipInitiatives',
  'homeCorePlatforms',
  'homeLatestNews',
  'homeAchievements',
  'aboutCapabilities',
  'schoolCurriculum',
  'schoolMentionables',
  'collegeNotables',
  'rdProgramStreams',
  'supportFaq',
  'impactStats',
  'impactFundingJourney',
  'impactRecognitions',
  'impactMilestones',
  'trustedSchools',
]

const sectionConfigs = {
  homeFlagshipInitiatives: {
    title: 'Home - Flagship Initiatives',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'text', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'reverse', label: 'Reverse layout', type: 'checkbox' },
    ],
  },
  homeCorePlatforms: {
    title: 'Home - Explore Our Core Platforms',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'tagline', label: 'Tagline', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'tags', label: 'Tags (one per line)', type: 'list', required: true },
      { key: 'highlights', label: 'Highlights (one per line)', type: 'list', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'imageAlt', label: 'Image alt', type: 'text', required: true },
    ],
  },
  homeLatestNews: {
    title: 'Home - Latest News',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'summary', label: 'Summary', type: 'textarea', required: true },
      { key: 'date', label: 'Date label', type: 'text', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'imageAlt', label: 'Image alt', type: 'text', required: true },
      { key: 'href', label: 'Link', type: 'route', required: true },
    ],
  },
  homeAchievements: {
    title: 'Home - Key Milestones & Achievements',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'imageAlt', label: 'Image alt', type: 'text', required: true },
    ],
  },
  aboutCapabilities: {
    title: 'About - Core Technology Domains We Work In',
    fields: [
      { key: 'area', label: 'Domain name', type: 'text', required: true },
      { key: 'desc', label: 'Description', type: 'textarea', required: true },
    ],
  },
  schoolCurriculum: {
    title: 'School - Curriculum Catalog',
    fields: [
      { key: 'stream', label: 'Stream', type: 'text', required: true },
      { key: 'slug', label: 'Slug', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'imageAlt', label: 'Image alt', type: 'text', required: true },
      { key: 'levels', label: 'Levels (Level | Grades | Focus per line)', type: 'levels', required: true },
    ],
  },
  schoolMentionables: {
    title: 'School - Milestones and Student Mentionables',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
    ],
  },
  collegeNotables: {
    title: 'College - Milestones and College Notables',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
    ],
  },
  rdProgramStreams: {
    title: 'R&D Solutions - Program Streams at a Glance',
    fields: [
      { key: 'stream', label: 'Stream title', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'imageAlt', label: 'Image alt', type: 'text', required: true },
    ],
  },
  supportFaq: {
    title: 'Support - Common Questions',
    fields: [
      { key: 'q', label: 'Question', type: 'text', required: true },
      { key: 'a', label: 'Answer', type: 'textarea', required: true },
    ],
  },
  impactStats: {
    title: 'Impact - Stats',
    fields: [
      { key: 'value', label: 'Value', type: 'text', required: true },
      { key: 'label', label: 'Label', type: 'text', required: true },
      { key: 'sub', label: 'Subtext', type: 'text', required: true },
    ],
  },
  impactFundingJourney: {
    title: 'Impact - Funding Journey',
    fields: [
      { key: 'year', label: 'Year', type: 'text', required: true },
      { key: 'amount', label: 'Amount', type: 'text', required: true },
      { key: 'label', label: 'Title', type: 'text', required: true },
      { key: 'detail', label: 'Detail', type: 'textarea', required: true },
    ],
  },
  impactRecognitions: {
    title: 'Impact - Recognitions',
    fields: [
      { key: 'award', label: 'Award', type: 'text', required: true },
      { key: 'body', label: 'Body', type: 'text', required: true },
      { key: 'significance', label: 'Significance', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
    ],
  },
  impactMilestones: {
    title: 'Impact - Milestones, Awards & Outcomes at a Glance',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'imageAlt', label: 'Image alt', type: 'text', required: true },
    ],
  },
  trustedSchools: {
    title: 'General - Schools Who Trust Us logos',
    fields: [
      { key: 'name', label: 'School name', type: 'text', required: true },
      { key: 'short', label: 'Short mark (2-4 chars)', type: 'text', required: true },
    ],
  },
}

const AdminContentContext = createContext(null)

function deepClone(value) {
  return JSON.parse(JSON.stringify(value))
}

function normalizeText(value) {
  return String(value ?? '').trim()
}

function parseListLines(value) {
  return String(value ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function parseLevels(value) {
  const lines = String(value ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const invalidLines = []
  const levels = lines
    .map((line) => {
      const [level = '', grades = '', ...focusRest] = line.split('|')
      const focus = focusRest.join('|').trim()
      const parsed = {
        level: level.trim(),
        grades: grades.trim(),
        focus,
      }
      if (!parsed.level || !parsed.grades || !parsed.focus) {
        invalidLines.push(line)
      }
      return parsed
    })
    .filter((item) => item.level && item.grades && item.focus)

  return { levels, invalidLines }
}

function fieldValueForDraft(type, value) {
  if (type === 'checkbox') {
    return Boolean(value)
  }
  if (type === 'list') {
    return Array.isArray(value) ? value.join('\n') : ''
  }
  if (type === 'levels') {
    if (!Array.isArray(value)) return ''
    return value.map((item) => `${item.level} | ${item.grades} | ${item.focus}`).join('\n')
  }
  return value == null ? '' : String(value)
}

function normalizeFieldValue(type, rawValue) {
  if (type === 'checkbox') {
    return Boolean(rawValue)
  }
  if (type === 'list') {
    return parseListLines(rawValue)
  }
  if (type === 'levels') {
    return parseLevels(rawValue)
  }
  return normalizeText(rawValue)
}

function isValidUrlOrPath(value) {
  return /^https?:\/\//i.test(value) || value.startsWith('/')
}

function createInitialContent() {
  if (typeof window === 'undefined') {
    return deepClone(defaultManagedContent)
  }

  try {
    const saved = window.localStorage.getItem(ADMIN_CONTENT_KEY)
    if (!saved) {
      return deepClone(defaultManagedContent)
    }
    const parsed = JSON.parse(saved)
    if (!parsed || typeof parsed !== 'object') {
      return deepClone(defaultManagedContent)
    }

    const next = deepClone(defaultManagedContent)
    sectionOrder.forEach((key) => {
      if (Array.isArray(parsed[key])) {
        next[key] = parsed[key]
      }
    })
    return next
  } catch {
    return deepClone(defaultManagedContent)
  }
}

function createEmptyDraft(sectionKey) {
  const config = sectionConfigs[sectionKey]
  if (!config) return {}
  const draft = {}
  config.fields.forEach((field) => {
    draft[field.key] = field.type === 'checkbox' ? false : ''
  })
  return draft
}

function itemToDraft(sectionKey, item) {
  const config = sectionConfigs[sectionKey]
  if (!config) return {}

  const draft = {}
  config.fields.forEach((field) => {
    draft[field.key] = fieldValueForDraft(field.type, item?.[field.key])
  })
  return draft
}

function validateAndNormalize(sectionKey, draft) {
  const config = sectionConfigs[sectionKey]
  if (!config) {
    return { errors: { section: 'Unknown section' }, item: null }
  }

  const errors = {}
  const item = {}

  config.fields.forEach((field) => {
    const normalized = normalizeFieldValue(field.type, draft[field.key])

    if (field.type === 'levels') {
      item[field.key] = normalized.levels
      if (normalized.invalidLines.length > 0) {
        errors[field.key] = 'Each line must use: Level | Grades | Focus'
      }
    } else {
      item[field.key] = normalized
    }

    if (field.required) {
      if (field.type === 'checkbox') {
        return
      }

      if (field.type === 'list' && item[field.key].length === 0) {
        errors[field.key] = 'At least one line is required'
      }

      if (field.type === 'levels' && item[field.key].length === 0) {
        errors[field.key] = 'Add at least one level line'
      }

      if (field.type !== 'list' && field.type !== 'levels' && !item[field.key]) {
        errors[field.key] = 'This field is required'
      }
    }

    if ((field.type === 'url' || field.type === 'route') && item[field.key] && !isValidUrlOrPath(item[field.key])) {
      errors[field.key] = 'Use an absolute URL (https://...) or /internal-path'
    }
  })

  if (sectionKey === 'trustedSchools' && item.short && item.short.length > 4) {
    errors.short = 'Short mark must be 4 characters or fewer'
  }

  return {
    errors,
    item,
  }
}

export function AdminContentProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem(ADMIN_SESSION_KEY) === '1'
  })

  const [content, setContent] = useState(createInitialContent)

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(ADMIN_CONTENT_KEY, JSON.stringify(content))
  }, [content])

  const value = useMemo(() => {
    const login = (username, password) => {
      if (normalizeText(username).toLowerCase() !== 'admin') {
        return { ok: false, message: 'Use admin as the username.' }
      }

      const expectedPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'
      if (password !== expectedPassword) {
        return { ok: false, message: 'Invalid password.' }
      }

      setIsAdmin(true)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(ADMIN_SESSION_KEY, '1')
      }
      return { ok: true }
    }

    const logout = () => {
      setIsAdmin(false)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(ADMIN_SESSION_KEY)
      }
    }

    const addItem = (sectionKey, draft) => {
      const { errors, item } = validateAndNormalize(sectionKey, draft)
      if (Object.keys(errors).length) {
        return { ok: false, errors }
      }

      setContent((prev) => ({
        ...prev,
        [sectionKey]: [...(prev[sectionKey] ?? []), item],
      }))

      return { ok: true }
    }

    const updateItem = (sectionKey, index, draft) => {
      const { errors, item } = validateAndNormalize(sectionKey, draft)
      if (Object.keys(errors).length) {
        return { ok: false, errors }
      }

      setContent((prev) => {
        const current = [...(prev[sectionKey] ?? [])]
        current[index] = item
        return {
          ...prev,
          [sectionKey]: current,
        }
      })

      return { ok: true }
    }

    const deleteItem = (sectionKey, index) => {
      setContent((prev) => {
        const current = [...(prev[sectionKey] ?? [])]
        current.splice(index, 1)
        return {
          ...prev,
          [sectionKey]: current,
        }
      })
    }

    const resetAllContent = () => {
      setContent(deepClone(defaultManagedContent))
    }

    return {
      isAdmin,
      content,
      login,
      logout,
      addItem,
      updateItem,
      deleteItem,
      resetAllContent,
      sectionOrder,
      sectionConfigs,
      createEmptyDraft,
      itemToDraft,
    }
  }, [content, isAdmin])

  return (
    <AdminContentContext.Provider value={value}>
      {children}
    </AdminContentContext.Provider>
  )
}

export function useAdminContent() {
  const context = useContext(AdminContentContext)
  if (!context) {
    throw new Error('useAdminContent must be used within AdminContentProvider')
  }
  return context
}
