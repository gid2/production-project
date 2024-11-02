import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

export default function ForbiddenPage() {
    const { t } = useTranslation('about');
    return (
        <Page>
            {
                t('У вас нету доступа к этой странице')
            }
        </Page>
    );
}
