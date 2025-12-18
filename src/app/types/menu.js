// SubmenuItem object structure
/*
{
  label: string,  // required
  href: string    // required
}
*/

// HeaderItem object structure
/*
{
  label: string,            // required
  href: string,             // required
  submenu?: SubmenuItem[]   // optional array of SubmenuItem
}
*/

// Sample usage:
const submenuItems = [
  { label: "Sub Item 1", href: "/sub1" },
  { label: "Sub Item 2", href: "/sub2" }
];

const headerItems = [
  { 
    label: "Home", 
    href: "/" 
  },
  { 
    label: "Services", 
    href: "/services",
    submenu: submenuItems 
  },
  { 
    label: "Contact", 
    href: "/contact" 
  }
];
