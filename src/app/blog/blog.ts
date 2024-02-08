import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface IBlogPostData {
  slug: string;
  metadata: IMetadata;
  content: string;
}

interface IMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
}

export function getBlogPost(slug: string): IBlogPostData | undefined {
  console.log("getting this blog posts:", slug);
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getAllBlogPosts(): IBlogPostData[] {
  console.log("getting all blog posts...");
  return getMDXData(pathToContentDirectory);
}

function getMDXData(dir: string): IBlogPostData[] {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let slug = path.basename(file, path.extname(file));
    let { metadata, content } = readMDXFile(path.join(dir, file));
    return {
      slug,
      metadata,
      content,
    };
  });
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    metadata: data as IBlogPostData["metadata"],
    content: content as IBlogPostData["content"],
  };
}

const pathToContentDirectory = path.join(process.cwd(), "src", "content");
