"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const eventemitter3_1 = __importDefault(require("eventemitter3"));
class BaseRepository {
    constructor(repo, eagerRelations) {
        this.repo = repo;
        this.eagerRelations = eagerRelations;
        this.eventEmitter = new eventemitter3_1.default();
    }
    create(newEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const newObject = yield this.repo.save(newEntity);
            if (!newObject.id) {
                throw new Error('Entity missing `id`');
            }
            this.eventEmitter.emit('OBJECT_CREATED', newObject);
            return this.findOneOrFail({ id: newObject.id });
        });
    }
    find(where, order) {
        return this.repo.find(Object.assign(Object.assign({ where }, order), { relations: this.eagerRelations }));
    }
    findOne(where, order) {
        return this.repo.findOne(Object.assign(Object.assign({ where }, order), { relations: this.eagerRelations }));
    }
    findOneOrFail(where, order) {
        return this.repo.findOneOrFail(Object.assign(Object.assign({ where }, order), { relations: this.eagerRelations }));
    }
    update(conditions, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repo.update(conditions, changes);
            this.eventEmitter.emit('OBJECT_UPDATED', conditions, changes);
        });
    }
    delete(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repo.delete(conditions);
            this.eventEmitter.emit('OBJECT_DELETED', conditions);
        });
    }
}
exports.BaseRepository = BaseRepository;
