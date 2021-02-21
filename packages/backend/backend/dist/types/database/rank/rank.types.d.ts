export declare enum PermissionStatus {
    Enabled = "1",
    Disabled = "0"
}
export declare function booleanToPermissionStatus(value: boolean): PermissionStatus;
export declare function permissionStatusToBoolean(permissionStatus: PermissionStatus): boolean;
