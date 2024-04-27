const menu_data = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about'
  },
  {
    id: 3,
    title: 'Shop',
    link: '/shop'
  },
  {
    id: 4,
    hasDropdown: true,
    title: 'Pages',
    link: '/about',
    submenus: [
      { title: 'FAQs', link: '/faq' },
      { title: 'Privacy & Policy', link: '/policy' },
      { title: 'Terms & Conditions', link: '/terms' },
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: 'My Cart', link: '/cart' },
      { title: 'My Wishlist', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'Error 404', link: '/404' },
    ]
  },
  {
    id: 5,
    title: 'Contact us',
    link: '/contact'
  },
]

export default menu_data;
