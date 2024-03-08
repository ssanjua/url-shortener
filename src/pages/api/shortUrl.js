import { PrismaClient } from '@prisma/client'

export default async function handler (req, res) {
  const prisma = new PrismaClient()
  console.log("Request body:", req.body); // Para ver qué datos recibe

  let { url } = req.body

  // Asegurar que la URL comienza con http:// o https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `http://${url}`;
  }

  const shortUrl = Math.random()
    .toString(36)
    .substr(2, 6)

  try {
    // Revisa si la URL ya existe en la base de datos
    let link = await prisma.link.findUnique({ where: { url } });
    
    // Si no existe, crea una nueva entrada
    if (!link) {
      link = await prisma.link.create({
        data: { url, shortUrl }
      });
    }

    console.log("Data sent back:", link) // Para ver qué datos envía

    prisma.$disconnect()

    return res.status(200).send(link)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}