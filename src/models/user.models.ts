export interface UserData {
    uid: string;
    displayName: string;
    photoURL: string;
    accessToken: string;
    email: string;
}

export interface Data extends Omit<UserData, 'uid'>{}