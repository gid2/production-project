import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileActions, profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    ProfileCard,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currensy';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        const newValue = value?.replace(/\D/g, '');
        dispatch(profileActions.updateProfile({ age: Number(newValue || 0) }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={err}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
