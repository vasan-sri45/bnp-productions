// import React from "react";
// import { format } from "date-fns";

// // Type definition for Blog (since TypeScript types were removed)
// const BlogCard = ({ blog }) => {
//   const { title, coverImage, excerpt, date, slug } = blog;
  
//   return (
//     <>
//       <div className="group mb-0 relative">
//         <div className="mb-8 overflow-hidden rounded-sm">
//           <div className="block cursor-pointer" onClick={() => {/* Handle blog click */}}>
//             <img
//               src={`/venus-nextjs/${coverImage}`}
//               alt={title}
//               className="w-full transition group-hover:scale-125 h-auto"
//             />
//           </div>
//         </div>
//         <div className="absolute top-0 bg-primary py-2 ml-4 mt-4 px-5 rounded-sm">
//           <span className="text-white font-medium text-sm">
//             Pricing
//           </span>
//         </div>
//         <div>
//           <h3>
//             <div
//               className="mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-tight cursor-pointer"
//               onClick={() => {/* Handle title click */}}
//             >
//               {title}
//             </div>
//           </h3>
//           <span className="text-sm font-semibold leading-loose text-SereneGray">
//             {format(new Date(date), "dd MMM yyyy")}
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogCard;



"use client";

import React from "react";
import { format } from "date-fns";

const BlogCard = ({ blog }) => {
  const { title, coverImage, date } = blog;

  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold dark:text-white group-hover:text-primary">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {format(new Date(date), "dd MMM yyyy")}
      </p>
    </div>
  );
};

export default BlogCard;
