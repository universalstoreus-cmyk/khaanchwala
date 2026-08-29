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
      width={60}
      height={60}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('block h-[56px] w-[56px] max-w-none object-contain object-center sm:h-[64px] sm:w-[64px]', className)}
      src="/kaanchwala-logo.webp"
    />
  )
}
