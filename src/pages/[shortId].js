import { PrismaClient } from '@prisma/client'

export default function ShortIdPage () {
  return <div>ShortID Redirect</div>
}

export async function getServerSideProps ({ params }) {

    console.log("Received params:", params); // Ver los parámetros recibidos

  const prisma = new PrismaClient()
  
  const { shortId } = params
  console.log("shortId:", shortId);

  const data = await prisma.link.findUnique({
    where: { shortUrl: shortId }
  })

  console.log("Data from DB:", data); // Ver los datos obtenidos de la base de datos

  prisma.$disconnect()

  if (!data) {
    console.log("No data found, redirecting to /");
    return {
      redirect: { destination: '/' }
    }
  }

  console.log("Data found, redirecting to:", data.url);
  return {
    redirect: {
      destination: data.url
    }
  }
}