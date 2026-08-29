import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Kaanchwala Glass & Mirror Solutions"
      width={190}
      height={80}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('block w-[150px] h-[64px] sm:w-[190px] sm:h-[80px] object-contain object-center', className)}
      src="/kaanchwala-logo.webp"
    />
  )
}
