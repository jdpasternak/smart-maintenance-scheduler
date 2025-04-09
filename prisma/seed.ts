import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');
  console.log('🌱 Environment:', process.env.APP_ENV || 'local');

  if (!['local', 'dev', 'test'].includes(process.env.APP_ENV || '')) {
    console.error(`❌ Seeding is only allowed in development or test environments.`);
    process.exit(0);
  }

  // Step 1: Seed Users
  // const existingUser = await prisma.user.findFirst({
  //     where: { email: 'demo@example.com' },
  // });

  // const user = existingUser || await prisma.user.create({
  //     data: {
  //         name: 'Demo User',
  //         email: 'demo@example.com',
  //         image: faker.image.avatar(),
  //     },
  // });

  // Step 2: Seed Machines
  // const machineTypes = ['Excavator', 'Bulldozer', 'Compressor', 'Crane', 'Loader'];

  await prisma.machine.deleteMany({});
  const machines = await Promise.all(
    [...Array(5)].map(() =>
      prisma.machine.create({
        data: {
          name: faker.commerce.productName(),
          // type: faker.helpers.arrayElement(machineTypes),
          // serialNumber: faker.string.uuid(),
          // usageHours: faker.number.int({ min: 50, max: 1500 }),
          // maintenanceIntervalHours: 500,
          // lastServicedAt: faker.date.past(),
          // createdById: user.id,
        },
      }),
    ),
  );
  console.log(`Seeded ${machines.length} machines.`);

  // Step 3: Seed Logs for Each Machine
  // for (const machine of machines) {
  //     const logCount = faker.number.int({ min: 1, max: 3 });

  //     for (let i = 0; i < logCount; i++) {
  //         await prisma.maintenanceLog.create({
  //             data: {
  //                 machineId: machine.id,
  //                 completedAt: faker.date.recent({ days: 90 }),
  //                 notes: faker.lorem.sentence(),
  //             },
  //         });
  //     }
  // }

  console.log('✅ Seeding complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
