import styled, { css } from 'react-emotion'
import { theme, breakpoint } from './colors'
import { rhythm } from '../utils/typography'

export const Container = css`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: ${breakpoint.medium}) {
    padding: 0 30px;
  }

  @media (max-width: ${breakpoint.small}) {
    padding: 0 20px;
  }
`

export const Divider = styled.div`
  border-bottom: 2px solid ${theme.secondary};
  width: 120px;
  margin-bottom: ${rhythm(1.5)};
`

export const SectionHeader = styled.div`
  padding: ${rhythm(3)} 0 ${rhythm(1.5)} ;

  @media (max-width: ${breakpoint.medium}) {
    padding: ${rhythm(2)} 0 ${rhythm(1.5 / 1.5)} ;
  }

  p {
    max-width: 70%;

    @media (max-width: ${breakpoint.medium}) {
      max-width: 100%;
    }
  }
`
