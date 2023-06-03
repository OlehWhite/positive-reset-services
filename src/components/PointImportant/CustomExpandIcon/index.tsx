import { Box } from '@mui/material';
import IMGMinus from 'assets/icons/minus.png';
import IMGPlus from 'assets/icons/plus.png';

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none'
        },
        '.expandIconWrapper': {
          display: 'none'
        },
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'block'
        }
      }}>
      <div className="expandIconWrapper">
        <img src={IMGMinus} alt="Minus" title="Minus" />
      </div>
      <div className="collapsIconWrapper">
        <img src={IMGPlus} alt="Plus" title="Plus" />
      </div>
    </Box>
  );
};
export default CustomExpandIcon;
