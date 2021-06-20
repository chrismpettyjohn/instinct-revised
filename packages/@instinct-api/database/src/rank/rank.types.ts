export enum PermissionStatus {
  Enabled = '1',
  Disabled = '0',
}

export function booleanToPermissionStatus(value: boolean): PermissionStatus {
  return value ? PermissionStatus.Enabled : PermissionStatus.Disabled;
}

export function permissionStatusToBoolean(
  permissionStatus: PermissionStatus
): boolean {
  return permissionStatus === PermissionStatus.Enabled;
}
