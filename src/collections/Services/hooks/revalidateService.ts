import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Service } from '@/payload-types'

const safeRevalidatePath = (path: string, logger?: { warn: (message: string) => void }) => {
  try {
    revalidatePath(path)
  } catch (error) {
    logger?.warn(`Service path revalidation skipped for ${path}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

const safeRevalidateTag = (tag: string, logger?: { warn: (message: string) => void }) => {
  try {
    revalidateTag(tag, 'max')
  } catch (error) {
    logger?.warn(`Service tag revalidation skipped for ${tag}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

export const revalidateService: CollectionAfterChangeHook<Service> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/services/${doc.slug}`
      const logger = payload.logger

      logger.info(`Revalidating service at path: ${path}`)

      safeRevalidatePath(path, logger)
      safeRevalidateTag('services-sitemap', logger)
      safeRevalidateTag('services-list', logger)
      safeRevalidateTag(`services_${doc.slug}`, logger)
      safeRevalidateTag(`services_id_${doc.id}`, logger)
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/services/${previousDoc.slug}`
      const logger = payload.logger

      logger.info(`Revalidating old service at path: ${oldPath}`)

      safeRevalidatePath(oldPath, logger)
      safeRevalidateTag('services-sitemap', logger)
      safeRevalidateTag('services-list', logger)
      safeRevalidateTag(`services_${previousDoc.slug}`, logger)
      safeRevalidateTag(`services_id_${previousDoc.id}`, logger)
    }

    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      safeRevalidateTag(`services_${previousDoc.slug}`, payload.logger)
    }
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Service> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    const path = `/services/${doc.slug}`
    safeRevalidatePath(path)
    safeRevalidateTag('services-sitemap')
    safeRevalidateTag('services-list')
    safeRevalidateTag(`services_${doc.slug}`)
    if (doc.id) safeRevalidateTag(`services_id_${doc.id}`)
  }

  return doc
}
