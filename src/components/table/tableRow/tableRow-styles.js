import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableRow: {
    display: 'flex',
    '&:hover': {
      backgroundColor: 'rgb(201,201,201)',
    },
    flexWrap: 'nowrap',
    height: 65,
    width: '200% !important',
  },
  tableCell: {
    padding: 3,
    flex: '1 0 auto',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
    background: 'rgb(255,255,255)',
  },
  selected: {
    backgroundColor: 'rgb(240,240,240)',
  },
  email: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 200,
    justifyContent: 'flex-start',
  },
  checkbox: {
    width: 80,
    position: 'sticky',
    left: 0,
    zIndex: 1,
    flexGrow: 0,
  },
  id: {
    width: 75,
    position: 'sticky',
    left: 86,
    zIndex: 1,
    flexGrow: 0,
  },
  name: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 180,
    justifyContent: 'flex-start',
    position: 'sticky',
    left: 167,
    zIndex: 1,
    flexGrow: 0,
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
