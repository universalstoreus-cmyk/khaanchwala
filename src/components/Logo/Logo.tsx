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
      width={52}
      height={52}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('block h-[48px] w-[48px] max-w-none object-contain object-center sm:h-[56px] sm:w-[56px]', className)}
      src="/kaanchwala-logo.webp"
    />
  )
}
