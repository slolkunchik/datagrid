import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles( theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    justifyContent: 'space-between',
    height: 48,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: 'rgba(203,203,203,0.35)',
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  deleteTitle: {
    flex: '1 1 100%',
  },
}))

export default style
