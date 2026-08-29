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
      width={72}
      height={72}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('block h-[64px] w-[64px] max-w-none object-contain object-center sm:h-[72px] sm:w-[72px]', className)}
      src="/kaanchwala-logo.webp"
    />
  )
}
