import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableRow: {
    display: 'flex',
    '&:hover': {
      backgroundColor: 'rgba(203,203,203,0.35)',
    },
    flexWrap: 'nowrap',
    height: 65,
  },
  tableCell: {
    padding: 7,
    flex: '1 0 auto',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
  },
  email: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 200,
    justifyContent: 'flex-start',
  },
  checkbox: {
    width: 80,
  },
  id: {
    width: 75,
  },
  name: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 180,
    justifyContent: 'flex-start',
  },
  date: {
    width: 160,
  },
  score: {
    width: 110,
    justifyContent: 'flex-end',
  },
  size: {
    width: 120,
  },
  married: {
    width: 120,
  }
})

export default useStyles
