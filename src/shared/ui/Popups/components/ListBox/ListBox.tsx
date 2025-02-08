import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../../../Stack/HStack/HStack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from 'shared/ui/Popups/styles/consts';
import popupCls from '../../styles/popup.module.scss'


export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: <T extends string>(value: T)=> void
    readOnly?: boolean
    direction?: DropdownDirection
    label?: string
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readOnly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack>
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readOnly}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
            >
                <HListbox.Button
                    className={cls.trigger}
                    disabled={readOnly}
                >
                    <Button
                        disabled={readOnly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
