import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import AgentationToolbar from '@/components/Agentation'
import './(frontend)/globals.css'

export const metadata: Metadata = {
  title: 'Kaanchwala | Glass & Mirror Solutions',
  description: 'Premium glass partitions, doors, railings and custom glass solutions in Hyderabad.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AgentationToolbar />
      </body>
    </html>
  )
}
