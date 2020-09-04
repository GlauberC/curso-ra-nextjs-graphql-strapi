export type ButtonProps = {
  label: string
  url: string
}
export type ImageProps = {
  alternativeText: string
  url: string
}
export type TechIconsProps = {
  id: string
  titleIcon: string
  imgIcon: ImageProps
}
export type ConceptProps = {
  id: string
  titleConcept: string
}
export type ModulesProps = {
  id: string
  title: string
  subtitle: string
  content: string
}

export type LinksSocialMediaProps = {
  id: string
  title: string
  url: string
}
export type AuthorProps = {
  id: string
  photo: ImageProps
  name: string
  role: string
  description: string
  linksSocialMedia: LinksSocialMediaProps[]
}
export type HeaderProps = {
  title: string
  description: string
  image: ImageProps
  button: ButtonProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  illustration: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptProps[]
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionScheduleProps = {
  title: string
  description: string
}
export type PricingBoxProps = {
  totalPrice: number
  numberInstallment: number
  valueInstallment: number
  benefits: string
  button: ButtonProps
}
export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}
export type ReviewProps = {
  id: string
  name: string
  review: string
  photo: ImageProps
}

export type SectionReviewsProps = {
  title: string
  Reviews: ReviewProps[]
}

export type QuestionProps = {
  id: string
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionSchedule: SectionScheduleProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
