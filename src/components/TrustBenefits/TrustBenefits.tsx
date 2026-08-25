import React from 'react'

type BenefitItem = {
  icon: React.ReactNode
  title: string
  description: string
}

type TrustBenefitsProps = {
  benefits: BenefitItem[]
}

export const TrustBenefits: React.FC<TrustBenefitsProps> = ({ benefits }) => {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Why Choose Kaanchwala?
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6">
            {benefits.map((benefit, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[200px] flex flex-col items-center px-4 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}