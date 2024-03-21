export {
    Profile,
    ProfileSchema,
} from './model/types/profil';

export {
    profileSlice,
    profileActions,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchPofileData';

export {
    updateProfileData,
} from './model/services/updateProfileData/updateProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
