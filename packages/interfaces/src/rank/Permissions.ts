export interface Permissions {
  websiteAdminClient: boolean;
  websiteShowStaff: boolean;
  websiteShowAdminPanel: boolean;
  websiteManageNews: boolean;
  websiteManageRanks: boolean;
  websiteManageUsers: boolean;
  websiteManageBans: boolean;
  websiteManageConfig: boolean;
  websiteManageBetaCodes: boolean;
  websiteManageGuestbook: boolean;
  websiteManageEmulator: boolean;
  websiteManageComments: boolean;
  websiteManageForums: boolean;
}

export const examplePermissions: Permissions = {
  websiteAdminClient: true,
  websiteShowStaff: true,
  websiteShowAdminPanel: true,
  websiteManageNews: true,
  websiteManageRanks: true,
  websiteManageUsers: true,
  websiteManageBans: true,
  websiteManageConfig: true,
  websiteManageBetaCodes: true,
  websiteManageGuestbook: true,
  websiteManageEmulator: true,
  websiteManageComments: true,
  websiteManageForums: true,
};
