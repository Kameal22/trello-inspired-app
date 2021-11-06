export const MEMBER_ROLE = "MEMBER";

export const ADMIN_ROLE = "ADMIN";

export const getRoleString = role => {
    role = role.toLowerCase();
    //returns string with first letter capitalized
    return role.charAt(0).toUpperCase() + role.slice(1);
}