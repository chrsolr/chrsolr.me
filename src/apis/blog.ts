import { join } from 'path'
import fs from 'fs'

export async function getBlogBySlug(
  slug: string,
): Promise<{ slug: string; markdown: string }> {
  const filename = slug.replace(/\.md$/, '')
  const filePath = join('./src/markdowns', `${filename}.md`)
  const markdown = await fs.promises.readFile(filePath, 'utf8')

  return {
    slug: filename,
    markdown,
  }
}

export async function getBlogPosts() {
  const files = await fs.promises.readdir(join('./src/markdowns'))
  const posts = await Promise.all(
    files.map(async (filename) => getBlogBySlug(filename)),
  )

  return posts
}
