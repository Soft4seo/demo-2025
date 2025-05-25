import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'andrey',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'postgres',
  });

  await client.connect();
  return client;
};
