const readString = (value) => (typeof value === "string" ? value : null);

export const serializeAuthUser = (user) => {
    const firebaseUser = user?.user ?? user;

    if (!firebaseUser || typeof firebaseUser !== "object" || typeof firebaseUser.uid !== "string") {
        return false;
    }

    return {
        uid: firebaseUser.uid,
        email: readString(firebaseUser.email),
        displayName: readString(firebaseUser.displayName),
        photoURL: readString(firebaseUser.photoURL),
    };
};
