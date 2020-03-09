import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '25px 0',
  },
  input: {
    marginLeft: 5,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },

  icon: {
    color: '#0000005e',
  },

  h1: {
   color: '#5d4c4b',
   textTransform: 'uppercase',
  }
})

export default style