import Typography from "typography"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"
import moragaTheme from 'typography-theme-moraga'
moragaTheme.baseFontSize = "14px"

const typography = new Typography(moragaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { rhythm, scale } = typography
export default typography
