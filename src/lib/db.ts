import { connect, Connection } from "@tidbcloud/serverless";

let cachedConn: Connection<any> | null = null;

export function isDbConfigured(): boolean {
  return Boolean(process.env.TIDB_DATABASE_URL || process.env.DATABASE_URL);
}

export function getDb(): Connection<any> {
  const databaseUrl = process.env.TIDB_DATABASE_URL || process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      "Missing TiDB Cloud connection string. Please set TIDB_DATABASE_URL in your environment variables."
    );
  }

  if (!cachedConn) {
    cachedConn = connect({ url: databaseUrl });
  }

  return cachedConn;
}
