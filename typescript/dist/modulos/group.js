"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGroups = void 0;
class Group {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.default = Group;
exports.defaultGroups = {
    users: 'users',
    admin: 'admins',
};
const manejaUsuarios = () => { };
//# sourceMappingURL=group.js.map