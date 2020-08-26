import React from 'react';
import './PopUpSearch.css';
import Popover from '@material-ui/core/Popover';

function PopUpSearch(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="popupsearch">
      <input type="image" src="https://image.flaticon.com/icons/svg/565/565590.svg" alt="search" className="searchbutton" onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <input id="searchInput" onChange={(e) => props.search(e.target.value)} />
      </Popover>
    </div>
  );
}

export default PopUpSearch;
