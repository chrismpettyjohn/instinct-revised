import 'dotenv/config';

function getEnvOrFail(key: string): string {
  const value: string | undefined = process.env[key];

  if (value === undefined) {
    throw new Error(`ENV Variable ${key} is missing`);
  }

  return value;
}

// Database
export const databaseHost: string = getEnvOrFail('DATABASE_HOST');
export const databaseUser: string = getEnvOrFail('DATABASE_USER');
export const databasePass: string = getEnvOrFail('DATABASE_PASS');
export const databaseName: string = getEnvOrFail('DATABASE_NAME');

// Authentication
export const jwtSecret: string = getEnvOrFail('JWT_SECRET');
export const jwtExpires = Number(getEnvOrFail('JWT_EXPIRES'));

// Defaults - User
export const defaultUserRank = Number(getEnvOrFail('DEFAULT_USER_RANK'));
export const defaultUserMotto: string = getEnvOrFail('DEFAULT_USER_MOTTO');
export const defaultUserLook: string = getEnvOrFail('DEFAULT_USER_LOOK');
export const defaultUserCredits = Number(getEnvOrFail('DEFAULT_USER_CREDITS'));
export const defaultUserPixels = Number(getEnvOrFail('DEFAULT_USER_PIXELS'));
export const defaultUserPoints = Number(getEnvOrFail('DEFAULT_USER_POINTS'));
export const defaultUserHomeRoom = Number(
  getEnvOrFail('DEFAULT_USER_HOME_ROOM')
);
