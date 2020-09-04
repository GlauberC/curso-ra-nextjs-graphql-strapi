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

  fragment SectionAboutProject on LandingPage {
    sectionAboutProject {
      ilustration {
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
        titleIcon
        imgIcon {
          url
          alternativeText
        }
      }
    }
  }

  query {
    landingPage {
      ...logo
      ...header
      ...SectionAboutProject
      ...sectionTech
    }
  }
`
export default GET_LANDING_PAGE
