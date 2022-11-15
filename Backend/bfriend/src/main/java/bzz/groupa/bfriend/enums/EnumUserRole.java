package bzz.groupa.bfriend.enums;

public enum EnumUserRole {
    ACTIVE_USER,
    PASSIVE_USER,
    DEACTIVATED_USER,
    ADMIN,
    MODERATOR;

    public static EnumUserRole getRoleByString(String stringRole) {
        stringRole = stringRole.toLowerCase();

        var roles = EnumUserRole.values();
        for (var role : roles) {
            if (role.name().equals(stringRole)) {
                return role;
            }
        }

        return null;
    }
}
