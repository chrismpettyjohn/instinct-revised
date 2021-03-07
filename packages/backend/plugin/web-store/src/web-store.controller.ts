import {HasSession} from '@instinct-api/session';
import {Controller, Get, Delete, Patch, Post} from '@nestjs/common';

@Controller('web-store')
@HasSession()
export class WebStoreController {}
