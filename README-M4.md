# COMPLEXICON: Module 4
## Setup
### Frontend Setup
1. **Create the frontend `.env` file** at `apps/frontend/.env`
2. Add `VITE_API_BASE_URL=http://localhost:<api-port-number>` to `.env`

### Backend setup
1. **Create the Database image**: `docker compose up`
2. **Create the backend `.env` file** at `apps/backend/.env`
3. **Add the required variables** to the `.env` file:
   1. `FRONTEND_URL=<url-of-front-end-server>`
   2. `PORT=3000`
   3. `DATABASE_URL=<url-of-local-postgres-db>`
4. **Generate the Prisma Client** modules: 
   1. `cd apps/backend`
   2. `npx prisma generate`
5. **Apply prisma migrations**: `npx prisma migrate dev`
6. **Seed the database** if needed:  `npx prisma db seed` 