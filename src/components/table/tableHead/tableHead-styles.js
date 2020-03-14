import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableHeadCell: {
    backgroundColor: 'rgb(158, 199, 239)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(218, 214, 214)',
    },
    padding: 3,
    flex: '1 0 auto',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 0,
    border: '1px solid rgb(201,201,201)',
  },
  sortedIcon: {
    padding: '0 5px',
    transform: 'rotateX(180deg)',
  },
  sortedIconHidden: {
    padding: '0 5px',
    visibility: 'hidden',
  },
  sortedIconRotateToDesc: {
    transform: 'none',
  },
  sortQueueHidden: {
    visibility: 'hidden',
  },
  tableHeadRow: {
    position: 'sticky',
    zIndex: 3,
    top: 0,
    display: 'flex',
    height: 35,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    width: '130%',
  },
  checkbox: {
    width: 80,
    flexGrow: 0,
    position: 'sticky',
    left: 0,
    zIndex: 2,
  },
  id: {
    width: 75,
    flexGrow: 0,
    position: 'sticky',
    left: 88,
    zIndex: 2,
  },
  name: {
    width: 250,
    position: 'sticky',
    left: 171,
    zIndex: 2,
    justifyContent: 'flex-start',
  },
  changeDate: {
    width: 250,
  },
  score: {
    width: 190,
  },
  size: {
    width: 185,
  },
  isMarried: {
    width: 175,
  },
  email: {
    width: 300,
  }
});
export default useStyles;