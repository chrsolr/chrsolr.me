import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { DateTime } from 'luxon'

type TMatterFile = {
  data: Record<string, string>
  content: string
}

function compareDateStrings(d1: string, d2: string) {
  const date1 = new Date(d1)
  const date2 = new Date(d2)
  return date1 > date2 ? -1 : date1 < date2 ? 1 : 0
}

export async function getBlogBySlug(id: string): Promise<{
  title: string
  author: string
  date: string
  slug: string
  markdown: string
}> {
  const filename = id.replace(/\.md$/, '')
  const filePath = join('./src/markdowns', `${filename}.md`)
  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  const {
    data: { title = '', author = '', date = '', slug = '' },
    content,
  }: TMatterFile = matter(fileContent)

  return {
    title,
    author,
    date: DateTime.fromJSDate(new Date(date)).toFormat('LLLL dd, yyyy'),
    slug,
    markdown: content,
  }
}

export async function getBlogPosts() {
  const files = await fs.promises.readdir(join('./src/markdowns'))
  const posts = await Promise.all(
    files.map(async (filename) => getBlogBySlug(filename)),
  )
  return posts.sort((a, b) => compareDateStrings(a.date, b.date))
}
