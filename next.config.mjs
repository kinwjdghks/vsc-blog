import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "standalone",
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [remarkRehype],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
