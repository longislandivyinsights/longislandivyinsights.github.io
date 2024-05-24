import { getPermalink } from './utils/permalinks';
import thirtyTwo from '~/assets/favicons/favicon-32x32.png';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Course Tutoring',
      links: [
        {
          text: 'High School Coursework',
          href: '#',
        },
        {
          text: 'Standardized Testing',
          href: '#',
        },
        {
          text: 'AP Coursework',
          href: '#',
        },
        {
          text: 'College Coursework',
          href: '#',
        },
      ],
    },
    {
      text: 'College Applications',
      links: [
        {
          text: 'Planning',
          href: '#',
        },
        {
          text: 'Essay Editing',
          href: '#',
        },
        {
          text: 'Application Review',
          href: '#',
        },
        {
          text: 'Resume Review',
          href: '#',
        },
      ],
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${thirtyTwo.src}" alt="CollegeCoaches logo" loading="lazy"></img>
    © ${new Date().getFullYear()} CollegeCoaches · All rights reserved.
  `,
};
