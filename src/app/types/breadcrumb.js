// BreadcrumbProps object structure
/*
{
  pageName: string,        // required
  pageDescription?: string // optional
}
*/

// BreadcrumbLink object structure  
/*
{
  href: string,  // required
  text: string   // required
}
*/

// Sample usage:
const breadcrumbProps = {
  pageName: "Portfolio Details",
  pageDescription: "Detailed information about our portfolio projects"
};

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "#", text: "Project Details" }
];
