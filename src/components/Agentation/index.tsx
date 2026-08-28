'use client'

import { Agentation } from 'agentation'

export default function AgentationToolbar() {
  if (process.env.NODE_ENV === 'production') return null

  return <Agentation />
}
