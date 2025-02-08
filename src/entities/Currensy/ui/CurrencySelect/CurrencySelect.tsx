import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currensy';
import { ListBox } from 'shared/ui/Popups/components/ListBox/ListBox';

interface CurrencySelectProps{
    className?: string;
    value?: Currency;
    onChange?: (value?: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            onChange={onChangeHandler}
            readOnly={readOnly}
            direction="top right"
        />
    );
});
