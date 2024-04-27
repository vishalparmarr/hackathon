import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = React.useState(router.pathname);
  console.log(activeLink);
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <Link href={href}>
      {children}
    </Link>
  );
}

export default NavLink;
