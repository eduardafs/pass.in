import { prisma } from '../src/lib/prisma'

async function seed(){
  await prisma.event.create({
    data: {
      id: 'f169ca09-02c7-421d-a346-a0c1f15cb9ce',
      title: 'Encontro de líderes',
      slug: 'encontro-de-lideres',
      details: 'Um evento para os líderes da empresa',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})