import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation();

    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
}
