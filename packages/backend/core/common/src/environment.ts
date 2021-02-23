export function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error('Missing environment token');
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
export const passwordHash: 'md5' | 'bcrypt' =
  getEnvOrFail('PASSWORD_HASH') === 'md5' ? 'md5' : 'bcrypt';

// Defaults - User
export const defaultUserRank = Number(getEnvOrFail('DEFAULT_USER_RANK'));
export const defaultUserMotto: string = getEnvOrFail('DEFAULT_USER_MOTTO');
export const defaultUserLook: string = getEnvOrFail('DEFAULT_USER_LOOK');
export const defaultUserCredits = Number(getEnvOrFail('DEFAULT_USER_CREDITS'));
export const defaultUserPixels = Number(getEnvOrFail('DEFAULT_USER_PIXELS'));
export const defaultUserPoints = Number(getEnvOrFail('DEFAULT_USER_POINTS'));
export const maxAccountsPerIP = Number(getEnvOrFail('MAX_ACCOUNTS_PER_IP'));

export const defaultUserHomeRoom = Number(
  getEnvOrFail('DEFAULT_USER_HOME_ROOM')
);
