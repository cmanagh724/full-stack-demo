import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

import { termSeedData } from "./seedData";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.term.deleteMany();

    // insert terms to db
    const createManyTerms = await prisma.term.createManyAndReturn(
        {
            data: termSeedData,
            skipDuplicates: true
        }
    );

    console.log(`CREATED TERMS: ${createManyTerms}`);
};

main()
.then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
}); 