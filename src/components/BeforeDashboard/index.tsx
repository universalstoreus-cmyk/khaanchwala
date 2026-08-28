import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <section className={baseClass} aria-label="Kaanchwala website dashboard guide">
      <div className={`${baseClass}__header`}>
        <div>
          <p className={`${baseClass}__eyebrow`}>KAANCHWALA WEBSITE</p>
          <h2>Manage your website</h2>
          <p className={`${baseClass}__intro`}>
            Update your content, images and business information from Payload. No coding is required
            for normal website updates.
          </p>
        </div>
        <a className={`${baseClass}__preview`} href="/" target="_blank" rel="noreferrer">
          View website ↗
        </a>
      </div>

      <div className={`${baseClass}__grid`}>
        <a className={`${baseClass}__card`} href="/admin/collections/services">
          <span>01</span>
          <strong>Services</strong>
          <small>Add or edit services, descriptions, features and images.</small>
        </a>
        <a className={`${baseClass}__card`} href="/admin/collections/portfolio">
          <span>02</span>
          <strong>Projects</strong>
          <small>Manage portfolio projects, galleries and project details.</small>
        </a>
        <a className={`${baseClass}__card`} href="/admin/collections/faqs">
          <span>03</span>
          <strong>FAQs</strong>
          <small>Keep common customer questions and answers up to date.</small>
        </a>
        <a className={`${baseClass}__card`} href="/admin/collections/testimonials">
          <span>04</span>
          <strong>Testimonials</strong>
          <small>Update customer feedback shown across the website.</small>
        </a>
        <a className={`${baseClass}__card`} href="/admin/globals/site-settings">
          <span>05</span>
          <strong>Site settings</strong>
          <small>Manage business contact details and global website information.</small>
        </a>
        <a className={`${baseClass}__card`} href="/admin/collections/media">
          <span>06</span>
          <strong>Media</strong>
          <small>Upload and reuse images and other website media.</small>
        </a>
      </div>

      <div className={`${baseClass}__workflow`}>
        <strong>Safe publishing workflow</strong>
        <span>Edit content</span>
        <b>→</b>
        <span>Preview</span>
        <b>→</b>
        <span>Publish</span>
      </div>
    </section>
  )
}

export default BeforeDashboard
