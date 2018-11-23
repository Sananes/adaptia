import { css } from 'react-emotion'
import { theme, breakpoint } from './colors'

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
