export const NavItemsLeft= [
  { name: 'Home', link: '/'},
  { name: 'About Us', link: '/about'},
  { 
    name: 'Meet The Team', 
    link: '/meet-team',
    children: [
      { name: 'Meet Dr Sarah', link: '/meet-dr-sarah'},
      { name: 'Meet Dr Ali ', link: '/meet-dr-ali'},
    ]
  },
  { 
    name: 'Our Office', 
    link: '/our-office',
    children: [
      { name: 'Our Mission', link: '/our-mission'},
      { name: 'Why Us', link: '/why-us'},
    ]
  }
];

export const NavItemsRight= [
  { name: 'Services', link: '/services'},
  { name: 'Blog', link: '/blog'},
  { name: 'FAQs', link: '/faqs'},
  { name: 'Contact', link: '/contact-us'}
];