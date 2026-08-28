'use client'

import { Agentation } from 'agentation'

export default function AgentationToolbar() {
  const enabled =
    process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_AGENTATION_ENABLED === 'true'

  if (!enabled) return null

  return <Agentation />
}
