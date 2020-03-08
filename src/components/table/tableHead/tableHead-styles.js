import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableHeadCell: {
    backgroundColor: '#e2bfbf',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#cbcbcb',
    },
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
  }
});
export default useStyles;