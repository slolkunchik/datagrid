import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableRow: {
    display: 'flex',
    '&:hover': {
      backgroundColor: 'rgb(201,201,201)',
    },
    flexWrap: 'nowrap',
    height: 35,
    width: '130% !important',
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
    border: '1px solid rgb(201,201,201)',
  },
  selected: {
    backgroundColor: 'rgb(240,240,240)',
  },
  email: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 300,
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
    left: 88,
    zIndex: 1,
    flexGrow: 0,
  },
  name: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 250,
    justifyContent: 'flex-start',
    position: 'sticky',
    left: 171,
    zIndex: 1,
  },
  date: {
    width: 250,
  },
  score: {
    width: 190,
    justifyContent: 'flex-end',
  },
  size: {
    width: 185,
  },
  married: {
    width: 175,
  }
})

export default useStyles
