function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error('Missing environment token');
  }

  return value;
}

export const maxAccountsPerIP = Number(getEnvOrFail('MAX_ACCOUNTS_PER_IP'));
