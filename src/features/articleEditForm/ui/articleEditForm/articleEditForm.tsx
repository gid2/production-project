import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './articleEditForm.module.scss';

interface articleEditFormProps {
    className?: string;
}

export const articleEditForm = memo((props: articleEditFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleEditForm, {}, [className])} />
    );
});
