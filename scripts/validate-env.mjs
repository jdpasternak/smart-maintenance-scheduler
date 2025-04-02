import { existsSync } from 'fs';
import dotenv from 'dotenv';

if (existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

const requiredVars = ['DATABASE_URL', 'AUTH_SECRET', 'AUTH_GOOGLE_ID', 'AUTH_GOOGLE_SECRET'];

const missing = requiredVars.filter(key => !process.env[key]);

if (missing.length > 0) {
  console.error(`❌ Missing required environment variables:\n${missing.join('\n')}`);
  process.exit(1);
}

console.log('✅ All required environment variables are set.');
