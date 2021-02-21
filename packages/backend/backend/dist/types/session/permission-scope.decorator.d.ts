import { Permissions } from '@instinct-prj/interface';
export declare const RequireScope: (scope: keyof Permissions) => import("@nestjs/common").CustomDecorator<string>;
export declare function HasScope(scope: keyof Permissions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
