"use strict";
const db = {
    filterUsers: (filter) => {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
const admins = db.filterUsers(function () {
    return this.admin;
});
// 注意：不可以使用箭头函数
// const admins = db.filterUsers((this: User) => {
//   return this.admin
// })
console.log(admins);
