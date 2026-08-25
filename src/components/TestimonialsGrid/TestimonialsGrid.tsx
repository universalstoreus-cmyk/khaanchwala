import React from 'react'
import { useTranslation } from 'next-i18next'

type TestimonialCardProps = {
  testimonial: any
}

export const TestimonialsGrid: React.FC<{
  testimonials: any[]
}> = ({ testimonials }) => {
  const { t } = useTranslation()

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
            {t('testimonials.section_title', 'What Clients Say')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      {/* Avatar placeholder */}
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {testimonial.quote}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {testimonial.authorName}
                          </span>

                          <span className="text-gray-400 dark:text-gray-500 text-sm">
                            {testimonial.company}
                          </span>
                        </div>

                        <div className="flex text-yellow-500">
                          {/* Rating stars */}
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="inline-block">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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