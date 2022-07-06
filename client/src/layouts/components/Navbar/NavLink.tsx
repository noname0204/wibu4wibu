import type { FC } from 'react';
import type { IconType } from 'react-icons';

import classes from './styles/NavLink.module.scss';
import { Link } from 'react-router-dom';
import { Ripple } from '~/components/Animations';

interface NavLinkProps {
  to: string;
  label: string;
  icon: IconType;
}
const NavLink: FC<NavLinkProps> = ({ to, label, icon: Icon }) => {
  return (
    <Link to={to} className={classes.link}>
      <Icon className={classes.icon} size={25} />
      {label}
      <Ripple />
    </Link>
  );
};

export default NavLink;
