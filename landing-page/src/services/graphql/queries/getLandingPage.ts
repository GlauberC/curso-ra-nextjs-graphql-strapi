import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        url
        alternativeText
      }
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      illustration {
        url
        alternativeText
      }
      title
      description
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        id
        titleIcon
        imgIcon {
          url
          alternativeText
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        titleConcept
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        id
        title
        subtitle
        content
      }
    }
  }

  fragment sectionSchedule on LandingPage {
    sectionSchedule {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallment
      valueInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        id
        photo {
          alternativeText
          url
        }
        name
        role
        description
        linksSocialMedia {
          id
          title
          url
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      Reviews {
        id
        name
        review
        photo {
          url
          alternativeText
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        id
        question
        answer
      }
    }
  }

  query {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionSchedule
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`
export default GET_LANDING_PAGE
