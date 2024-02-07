import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "../mdx/components";

export interface ICustomMDXProps {
  source: string;
}

export function CustomMDX(props: ICustomMDXProps) {
  return <MDXRemote {...props} components={{ ...components }} />;
}
