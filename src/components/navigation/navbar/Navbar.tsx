import { Box } from '@mui/material';
import { RefObject } from 'react';
import './Navbar.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useScrollDirection } from '../../../shared/hooks/useScrollDirection';
import classNames from 'classnames';
import ColorPanel from './color-panel/ColorPanel';
import { COLORS } from '../../../shared/constants/Colors';

export interface NavbarItem {
  ref: RefObject<HTMLDivElement>;
  icon: ReactJSXElement;
}

interface NavbarProps {
  activeIndex: number;
  items: NavbarItem[];
}

const SCROLL_THRESHOLD = 50;

const Navbar = ({ items, activeIndex }: NavbarProps) => {
  const isScrollingDown = useScrollDirection(SCROLL_THRESHOLD) === 'down';

  const scrollTo = (element: HTMLDivElement | null) => {
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="nav"
      className={classNames('navbar-container', { collapsable: isScrollingDown })}>
      {items.map((item, index) => {
        return (
          <Box
            className={classNames('navbar-item', { active: activeIndex === index })}
            onClick={() => scrollTo(item.ref?.current)}
            key={index}>
            {item.icon}
          </Box>
        );
      })}
      <ColorPanel className="navbar-item" colors={COLORS} />
    </Box>
  );
};

export default Navbar;
