import { FileTree } from "nextra/components";

export function SurfstarUsageFileTree() {
  return (
    <FileTree>
      <FileTree.Folder name="bin">
        <FileTree.File name="wave" />
      </FileTree.Folder>
      <FileTree.Folder name="src" defaultOpen>
        <FileTree.Folder name="commands" defaultOpen>
          <FileTree.File name="send-email.ts" />
        </FileTree.Folder>
        <FileTree.Folder name="templates" defaultOpen>
          <FileTree.File name="course.surf" />
        </FileTree.Folder>
        <FileTree.File name="package.json" />
        <FileTree.File name="bun.lockb" />
        <FileTree.File name="README.md" />
      </FileTree.Folder>
    </FileTree>
  )
}