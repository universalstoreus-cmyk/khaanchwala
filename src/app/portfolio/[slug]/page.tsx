import React from 'react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import config from '@/payload.config'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payload = await getPayload({ config })

  // Fetch the project by slug
  const { docs } = await payload.find({
    collection: 'portfolio',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    depth: 1,
  })

  const project = docs[0]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">