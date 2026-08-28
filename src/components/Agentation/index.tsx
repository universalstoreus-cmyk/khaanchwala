'use client'

import { Agentation } from 'agentation'

export default function AgentationToolbar() {
  const enabled =
    process.env.NEXT_PUBLIC_AGENTATION_ENABLED === 'true' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'

  if (!enabled) return null

  return <Agentation />
}
