import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string,
    lastname: string
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
