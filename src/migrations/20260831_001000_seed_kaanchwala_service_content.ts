import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

const services = [
  {
    title: 'Toughened Glass', slug: 'toughened-glass', sortOrder: 1,
    summary: 'Heat-treated safety glass designed for doors, partitions and modern interiors.',
    metaTitle: 'Toughened Glass in Hyderabad | Kaanch Wala',
    metaDescription: 'Custom toughened glass for doors, partitions and interiors in Hyderabad.',
    features: [['Enhanced safety and strength', 'Heat-treated glass for demanding door, partition and interior applications.']],
    applications: [['Doors, partitions & shower areas', 'Ideal where safer, stronger glass performance is required.']],
    faqs: [['What thickness of toughened glass is suitable?', 'The right thickness depends on the span, application, support and safety requirement. We confirm the specification after measuring the site.']],
  },
  {
    title: 'Shower Cubicles', slug: 'shower-cubicles', sortOrder: 2,
    summary: 'Made-to-measure shower enclosures with clean lines, reliable hardware and practical layouts.',
    metaTitle: 'Shower Cubicles in Hyderabad | Kaanch Wala',
    metaDescription: 'Custom shower cubicles with practical layouts and premium hardware in Hyderabad.',
    features: [['Custom shower layouts', 'Layouts and hardware selected around bathroom size, access and style.']],
    applications: [['Bathrooms & luxury residences', 'Built around available space, access and bathroom aesthetics.']],
    faqs: [['Can a shower cubicle be made to fit an unusual bathroom?', 'Yes. We can plan around non-standard widths, corners, doors and shower layouts after a site measurement.']],
  },
  {
    title: 'Glass Partitions', slug: 'glass-partitions', sortOrder: 3,
    summary: 'Frameless and framed glass partition systems for bright, flexible homes and offices.',
    metaTitle: 'Glass Partitions in Hyderabad | Kaanch Wala',
    metaDescription: 'Modern frameless and framed glass partitions for homes and offices in Hyderabad.',
    features: [['Flexible privacy solutions', 'Clear, frosted and framed options for balancing openness and privacy.']],
    applications: [['Offices, cabins & room dividers', 'Suitable for private cabins, open-plan divisions and circulation zones.']],
    faqs: [['Can glass partitions provide privacy?', 'Yes. Frosted, etched, tinted and film options can improve privacy while keeping the partition bright.']],
  },
  {
    title: 'Office Glass Cabins', slug: 'office-glass-cabins', sortOrder: 4,
    summary: 'Professional glass cabins that create private, bright and productive office zones.',
    metaTitle: 'Office Glass Cabins in Hyderabad | Kaanch Wala',
    metaDescription: 'Professional glass cabins for private, bright and productive office spaces in Hyderabad.',
    features: [['Bright private work zones', 'Glass cabins arranged for focus, meetings and natural light.']],
    applications: [['Manager rooms & meeting spaces', 'Creates privacy without blocking natural light.']],
    faqs: [['Can an office glass cabin be customized?', 'Yes. Size, glass type, frame/profile, door arrangement and finish can be planned around the office.']],
  },
  {
    title: 'Custom Wall Mirrors', slug: 'custom-wall-mirrors', sortOrder: 5,
    summary: 'Precision-cut wall mirrors tailored to rooms, feature walls and commercial interiors.',
    metaTitle: 'Custom Wall Mirrors in Hyderabad | Kaanch Wala',
    metaDescription: 'Made-to-measure wall mirrors for residential and commercial interiors in Hyderabad.',
    features: [['Made-to-measure precision', 'Accurate sizing and edge finishing for a clean wall-to-wall fit.']],
    applications: [['Feature walls & dressing areas', 'Works across bedrooms, living spaces, retail displays and feature walls.']],
    faqs: [['Can the mirror be made to a specific size?', 'Yes. We can work to measured wall dimensions and discuss edge shapes and finishing options.']],
  },
  {
    title: 'Decorative Mirrors', slug: 'decorative-mirrors', sortOrder: 6,
    summary: 'Designer decorative mirrors that add depth, light and personality to interiors.',
    metaTitle: 'Decorative Mirrors in Hyderabad | Kaanch Wala',
    metaDescription: 'Designer decorative mirrors for elegant residential and commercial interiors in Hyderabad.',
    features: [['Designer visual impact', 'Bevels, shapes and layouts selected to strengthen the interior design.']],
    applications: [['Living rooms, hotels & retail', 'Adds depth and visual interest to hospitality, retail and homes.']],
    faqs: [['Can decorative mirrors be designed to match an interior?', 'Yes. Shape, size, beveling, pattern and placement can be selected around the overall interior design.']],
  },
  {
    title: 'Glass Railings & Balustrades', slug: 'glass-railings-balustrades', sortOrder: 7,
    summary: 'Elegant glass railing and balustrade systems for stairs, balconies and terraces.',
    metaTitle: 'Glass Railings & Balustrades | Kaanch Wala',
    metaDescription: 'Safe, elegant glass railings and balustrades for stairs, balconies and terraces.',
    features: [['Safe elegant protection', 'Railing systems planned around safe movement and a refined architectural finish.']],
    applications: [['Stairs, balconies & terraces', 'Designed for safe movement with a lighter architectural appearance.']],
    faqs: [['Are glass railings suitable for stairs and balconies?', 'Yes. The system is selected around stair geometry, balcony use, fixing method and required safety considerations.']],
  },
  {
    title: 'Aluminium Sliding Windows', slug: 'aluminium-sliding-windows', sortOrder: 8,
    summary: 'Smooth-gliding aluminium windows built for durability, ventilation and modern elevations.',
    metaTitle: 'Aluminium Sliding Windows | Kaanch Wala',
    metaDescription: 'Modern aluminium sliding windows designed for durability and smooth everyday use.',
    features: [['Smooth durable operation', 'Aluminium profiles engineered for repeated sliding and practical ventilation.']],
    applications: [['Homes, offices & commercial fronts', 'Suitable for modern elevations and high-use sliding openings.']],
    faqs: [['Do aluminium sliding windows work for large openings?', 'Yes. Larger openings can be planned with suitable aluminium sections, glass selection and hardware.']],
  },
  {
    title: 'UPVC Windows', slug: 'upvc-windows', sortOrder: 9,
    summary: 'Energy-conscious, low-maintenance UPVC windows for comfort and long-term performance.',
    metaTitle: 'UPVC Windows in Hyderabad | Kaanch Wala',
    metaDescription: 'Low-maintenance UPVC windows designed for comfort, durability and clean finishes.',
    features: [['Comfort and low maintenance', 'Easy-care frames with a comfortable, durable enclosure for everyday living.']],
    applications: [['Homes, apartments & renovations', 'Useful for new construction, upgrades and renovation projects.']],
    faqs: [['Why choose UPVC windows for a home?', 'UPVC offers low maintenance and a clean finish; the right specification depends on the opening, ventilation and project requirements.']],
  },
  {
    title: 'Mesh Doors', slug: 'mesh-doors', sortOrder: 10,
    summary: 'Practical mesh door systems that balance airflow, visibility and everyday protection.',
    metaTitle: 'Mesh Doors in Hyderabad | Kaanch Wala',
    metaDescription: 'Mesh doors designed for ventilation, visibility and practical everyday protection.',
    features: [['Airflow with protection', 'Mesh construction supports airflow while adding a protective barrier.']],
    applications: [['Balconies, entrances & utility areas', 'Practical for entry points and spaces needing ventilation.']],
    faqs: [['Where are mesh doors most useful?', 'Mesh doors are useful at entrances, balconies and utility areas where airflow is important alongside everyday protection.']],
  },
  {
    title: 'Fusion Glass & Beveling', slug: 'fusion-glass-beveling', sortOrder: 11,
    summary: 'Custom decorative glass with fusion details, beveling and premium finishing.',
    metaTitle: 'Fusion Glass & Beveling | Kaanch Wala',
    metaDescription: 'Decorative fusion glass and beveling solutions with precision finishing in Hyderabad.',
    features: [['Precision decorative detail', 'Special decorative processing creates distinctive glass details and edges.']],
    applications: [['Feature glass & decorative interiors', 'Designed for statement pieces, panels and custom decorative work.']],
    faqs: [['What is fusion glass and beveling?', 'Fusion glass uses decorative glass processing, while beveling creates shaped finished edges for a more detailed appearance.']],
  },
  {
    title: 'Glass Polishing', slug: 'glass-polishing', sortOrder: 12,
    summary: 'Professional edge and surface polishing for cleaner, smoother finished glass.',
    metaTitle: 'Glass Polishing in Hyderabad | Kaanch Wala',
    metaDescription: 'Professional glass edge and surface polishing for a clean, refined finish.',
    features: [['Smooth refined glass edges', 'Professional finishing improves edge smoothness and presentation.']],
    applications: [['Edges, panels & finished installations', 'Useful before installation, refurbishment or final finishing.']],
    faqs: [['Can scratched or dull glass be polished?', 'In many cases, polishing can improve dull or rough-looking surfaces and edges. We assess the condition before recommending treatment.']],
  },
  {
    title: 'PVD Work & Aluminium Profiles', slug: 'pvd-work-aluminium-profiles', sortOrder: 13,
    summary: 'Premium PVD finishes paired with aluminium profiles for refined modern interiors.',
    metaTitle: 'PVD Work & Aluminium Profiles | Kaanch Wala',
    metaDescription: 'Premium PVD finishing and aluminium profile solutions for modern interiors.',
    features: [['Premium metal finishes', 'PVD and profile combinations create a refined contemporary look.']],
    applications: [['Partitions, hardware & premium interiors', 'Suitable for premium partitions, profiles and interior hardware coordination.']],
    faqs: [['What is PVD finishing used for?', 'PVD provides a durable decorative finish for selected metal and aluminium profile applications, especially in premium interiors.']],
  },
  {
    title: 'Aristo Wardrobes', slug: 'aristo-wardrobes', sortOrder: 14,
    summary: 'Premium wardrobe systems planned around storage, access and interior design.',
    metaTitle: 'Aristo Wardrobes in Hyderabad | Kaanch Wala',
    metaDescription: 'Premium wardrobe systems planned for modern homes, storage and interior aesthetics.',
    features: [['Smart modern storage', 'Storage planning prioritizes access, organization and clean modern detailing.']],
    applications: [['Bedrooms, dressing rooms & premium homes', 'Planned around room geometry, storage needs and interior style.']],
    faqs: [['Can wardrobe layouts be customized?', 'Yes. Layout, storage zones, access and finish can be planned around room dimensions and usage.']],
  },
] as const

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  for (const service of services) {
    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: service.slug } },
      locale: 'en',
      limit: 1,
      depth: 0,
    })

    const data = {
      title: service.title,
      slug: service.slug,
      summary: service.summary,
      sortOrder: service.sortOrder,
      ctaLabel: 'Request a Free Quote',
      ctaUrl: '/contact',
      features: service.features.map(([title, description]) => ({ title, description })),
      applications: service.applications.map(([title, description]) => ({ title, description })),
      faqs: service.faqs.map(([question, answer]) => ({ question, answer })),
      meta: {
        title: service.metaTitle,
        description: service.metaDescription,
      },
      publishedAt: new Date().toISOString(),
      _status: 'published',
    }

    if (existing.docs[0]) {
      await payload.update({ collection: 'services', id: existing.docs[0].id, data, locale: 'en', depth: 0 })
    } else {
      await payload.create({ collection: 'services', data, locale: 'en', depth: 0 })
    }
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  for (const service of services) {
    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: service.slug } },
      locale: 'en',
      limit: 1,
      depth: 0,
    })
    if (existing.docs[0]) await payload.delete({ collection: 'services', id: existing.docs[0].id })
  }
}
