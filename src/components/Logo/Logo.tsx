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
      width={120}
      height={120}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx(
        'block w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] max-w-none object-contain object-center',
        className,
      )}
      src="/kaanchwala-logo.webp"
    />
  )
}