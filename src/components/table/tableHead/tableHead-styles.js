import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableHeadCell: {
    backgroundColor: '#e2bfbf',
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
    height: 65,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    width: '200%',
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
    left: 86,
    zIndex: 2,
  },
  name: {
    width: 180,
    flexGrow: 0,
    position: 'sticky',
    left: 167,
    zIndex: 2,
  },
  changeDate: {
    width: 160,
  },
  score: {
    width: 110,
  },
  size: {
    width: 120,
  },
  isMarried: {
    width: 120,
  },
  email: {
    width: 200,
  }
});
export default useStyles;