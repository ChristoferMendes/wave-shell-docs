import { FileTree } from "nextra/components";

export function Tree() {
  return (
    <FileTree>
      <FileTree.Folder name="bin">
        <FileTree.File name="wave.ts" />
      </FileTree.Folder>
      <FileTree.Folder name="src" defaultOpen>
        <FileTree.Folder name="components">
          <FileTree.File name="hello.ts" />
        </FileTree.Folder>
        <FileTree.File name="package.json" />
        <FileTree.File name="bun.lockb" />
        <FileTree.File name="README.md" />
      </FileTree.Folder>
    </FileTree>
  );
}
