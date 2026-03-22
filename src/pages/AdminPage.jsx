import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { useAdminContent } from '../context/AdminContentContext'

function FieldInput({ field, value, onChange, error }) {
  const isTextArea = field.type === 'textarea' || field.type === 'list' || field.type === 'levels'

  return (
    <label className="admin-field">
      <span>
        {field.label}
        {field.required ? ' *' : ''}
      </span>
      {field.type === 'checkbox' ? (
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(field.key, event.target.checked)}
        />
      ) : isTextArea ? (
        <textarea
          value={value ?? ''}
          onChange={(event) => onChange(field.key, event.target.value)}
          rows={field.type === 'levels' ? 5 : 4}
        />
      ) : (
        <input
          type="text"
          value={value ?? ''}
          onChange={(event) => onChange(field.key, event.target.value)}
        />
      )}
      {error && <small className="admin-field-error">{error}</small>}
    </label>
  )
}

function AdminPage() {
  const {
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
  } = useAdminContent()

  const [credentials, setCredentials] = useState({ username: 'admin', password: '' })
  const [authError, setAuthError] = useState('')
  const [activeSection, setActiveSection] = useState(sectionOrder[0])
  const [addDraft, setAddDraft] = useState(createEmptyDraft(sectionOrder[0]))
  const [addErrors, setAddErrors] = useState({})
  const [editingIndex, setEditingIndex] = useState(-1)
  const [editDraft, setEditDraft] = useState({})
  const [editErrors, setEditErrors] = useState({})

  const sectionConfig = sectionConfigs[activeSection]
  const sectionItems = content[activeSection] ?? []

  const switchSection = (nextSection) => {
    setActiveSection(nextSection)
    setAddDraft(createEmptyDraft(nextSection))
    setAddErrors({})
    setEditingIndex(-1)
    setEditDraft({})
    setEditErrors({})
  }

  const handleLogin = (event) => {
    event.preventDefault()
    const result = login(credentials.username, credentials.password)
    if (!result.ok) {
      setAuthError(result.message)
      return
    }
    setAuthError('')
    setCredentials((prev) => ({ ...prev, password: '' }))
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const result = addItem(activeSection, addDraft)
    if (!result.ok) {
      setAddErrors(result.errors)
      return
    }
    setAddErrors({})
    setAddDraft(createEmptyDraft(activeSection))
  }

  const beginEdit = (index) => {
    setEditingIndex(index)
    setEditDraft(itemToDraft(activeSection, sectionItems[index]))
    setEditErrors({})
  }

  const handleSaveEdit = (event) => {
    event.preventDefault()
    if (editingIndex < 0) return
    const result = updateItem(activeSection, editingIndex, editDraft)
    if (!result.ok) {
      setEditErrors(result.errors)
      return
    }
    setEditingIndex(-1)
    setEditDraft({})
    setEditErrors({})
  }

  const updateDraftField = (setter) => (key, value) => {
    setter((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <PageMeta
        title="Admin CMS"
        description="Authenticated admin content manager for DigiSchool pages."
      />

      {!isAdmin ? (
        <section className="section-block">
          <SectionHeading
            eyebrow="Admin"
            title="Admin Authentication"
            intro="Login with admin credentials to unlock add, update, and delete tools for website content sections."
          />
          <form className="admin-auth-card" onSubmit={handleLogin}>
            <label className="admin-field">
              <span>Username</span>
              <input
                type="text"
                value={credentials.username}
                onChange={(event) => setCredentials((prev) => ({ ...prev, username: event.target.value }))}
              />
            </label>
            <label className="admin-field">
              <span>Password</span>
              <input
                type="password"
                value={credentials.password}
                onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
              />
            </label>
            {authError && <p className="admin-inline-error">{authError}</p>}
            <div className="admin-auth-actions">
              <button type="submit" className="btn btn-primary">Login as Admin</button>
            </div>
          </form>
        </section>
      ) : (
        <>
          <section className="section-block">
            <SectionHeading
              eyebrow="Admin CMS"
              title="Manage Dynamic Website Content"
              intro="Choose a section, then add, update, or delete items. Changes are validated and applied instantly across the site."
            />

            <div className="admin-toolbar">
              <label className="admin-field admin-section-picker">
                <span>Editable section</span>
                <select value={activeSection} onChange={(event) => switchSection(event.target.value)}>
                  {sectionOrder.map((key) => (
                    <option key={key} value={key}>{sectionConfigs[key].title}</option>
                  ))}
                </select>
              </label>
              <div className="admin-toolbar-actions">
                <button type="button" className="btn btn-ghost" onClick={logout}>Logout</button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={resetAllContent}
                >
                  Reset All Content
                </button>
              </div>
            </div>

            <form className="admin-editor-panel" onSubmit={handleAdd}>
              <h3>Add New Item</h3>
              <div className="admin-field-grid">
                {sectionConfig.fields.map((field) => (
                  <FieldInput
                    key={field.key}
                    field={field}
                    value={addDraft[field.key]}
                    onChange={updateDraftField(setAddDraft)}
                    error={addErrors[field.key]}
                  />
                ))}
              </div>
              <div className="admin-editor-actions">
                <button type="submit" className="btn btn-primary">Add Item</button>
              </div>
            </form>
          </section>

          <section className="section-block compact-top">
            <SectionHeading
              eyebrow="Current Items"
              title={sectionConfig.title}
              intro={`Total items: ${sectionItems.length}`}
            />

            <div className="admin-item-list">
              {sectionItems.map((item, index) => (
                <article key={`${activeSection}-${index}`} className="admin-item-card">
                  <div className="admin-item-head">
                    <p>Item {index + 1}</p>
                    <div className="admin-item-actions">
                      <button type="button" className="btn btn-ghost" onClick={() => beginEdit(index)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => deleteItem(activeSection, index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {editingIndex === index ? (
                    <form className="admin-inline-edit" onSubmit={handleSaveEdit}>
                      <div className="admin-field-grid">
                        {sectionConfig.fields.map((field) => (
                          <FieldInput
                            key={field.key}
                            field={field}
                            value={editDraft[field.key]}
                            onChange={updateDraftField(setEditDraft)}
                            error={editErrors[field.key]}
                          />
                        ))}
                      </div>
                      <div className="admin-editor-actions">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() => {
                            setEditingIndex(-1)
                            setEditDraft({})
                            setEditErrors({})
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <pre className="admin-item-preview">{JSON.stringify(item, null, 2)}</pre>
                  )}
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default AdminPage
