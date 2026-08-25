import React from 'react'

type InstallationStep = {
  number: number
  title: string
  description: string
  icon?: React.ReactNode
}

type InstallationProcessProps = {
  steps: InstallationStep[]
}

export const InstallationProcess: React.FC<InstallationProcessProps> = ({ steps }) => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Our Installation Process
          </h2>

          <div className="space-y-6">
            {steps.map((step) => {
              return (
                <div key={step.number} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-blue-600 font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}