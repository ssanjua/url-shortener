import { PrismaClient } from '@prisma/client'

export default async function handler (req, res) {
  const prisma = new PrismaClient()

  let { url } = req.body

  // Asegurar que la URL comienza con http:// o https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `http://${url}`;
  }

  const shortUrl = Math.random()
    .toString(36)
    .substr(2, 6)

  try {
    let link = await prisma.link.findUnique({ where: { url } });
    
    if (!link) {
      link = await prisma.link.create({
        data: { url, shortUrl }
      });
    }
    prisma.$disconnect()

    return res.status(200).send(link)
  } catch (error) {
    return res.status(500).send(error)
  }
}