import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface IMDXData {
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

export function getAllBlogPosts(): IMDXData[] {
  return getMDXData(pathToContentDirectory);
}

export function getBlogPost(slug: string) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

function getMDXData(dir: string): IMDXData[] {
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
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function parseFrontmatter(fileContent: string) {
  const { data, content } = matter(fileContent);
  return {
    metadata: data as IMDXData["metadata"],
    content: content as IMDXData["content"],
  };
}

const pathToContentDirectory = path.join(process.cwd(), "src", "content");
