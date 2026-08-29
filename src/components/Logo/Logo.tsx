import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Kaanchwala Glass & Mirror Solutions"
      width={72}
      height={72}
      loading={loadingFromProps || 'lazy'}
      fetchPriority={priorityFromProps || 'low'}
      decoding="async"
      className={clsx(
        'block h-auto w-[56px] max-w-[56px] object-contain object-center sm:w-[64px] sm:max-w-[64px]',
        className,
      )}
      src="/kaanchwala-logo.webp"
    />
  )
}
