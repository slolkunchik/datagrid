import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles({
  root: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    width: '130px',
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  form: {
    flex: '1 1 auto',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchBox: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    margin: '0 5px',
    flex: 1,
  },
  icon: {
    color: '#0000005e',
  },
})

export default style