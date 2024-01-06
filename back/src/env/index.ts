import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
  NEW_USER_LINK: z.string(),
  RECOVERY_LINK: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.coerce.number(),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),
  PATH_REGISTER_OFFICE: z.string(),
  SUBJECT_REGISTER_OFFICE: z.string(),
  PATH_RECOVERY_PASSWORD: z.string(),
  SUBJECT_RECOVERY_PASSWORD: z.string(),
  PATH_REGISTER_CUSTOMER: z.string(),
  SUBJECT_REGISTER_CUSTOMER: z.string(),

  SEED_EMAIL: z.string(),
  SEED_PASSWORD: z.string(),
  SEED_CNPJ: z.string(),
  SEED_NAME: z.string(),
  SEED_ROLE: z.enum(['master']),

  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  BUCKET_NAME: z.string(),
  AWS_REGION: z.string(),

  PLUGNOTAS_API_URL: z.string(),
  API_KEY: z.string(),

  WEBHOOK_ENDPOINT: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('❌ Invalid environment variables.')
}

export const env = _env.data
