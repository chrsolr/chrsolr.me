import { join } from 'path'
import fs from 'fs'

export async function getBlogBySlug(slug: string) {
  const filePath = join('./src/markdowns', `${slug}.md`)
  const fileContent = await fs.promises.readFile(filePath, 'utf8')

  return fileContent
}
