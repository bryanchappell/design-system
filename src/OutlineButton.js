import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Button from './Button'
import theme from './theme'

const OutlineButton = styled(Button)`
  color: ${props => props.theme.colors.green};
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.green};
  background-color: transparent;

  &:hover {
    color: ${props => (props.disabled ? null : props.theme.colors.darkGreen)};
    box-shadow: inset 0 0 0 2px
      ${props => (props.disabled ? null : props.theme.colors.darkGreen)};
    background-color: transparent;
  }
`

OutlineButton.defaultProps = {
  theme: theme
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
