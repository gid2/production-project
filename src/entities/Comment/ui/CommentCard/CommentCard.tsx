import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <AppLink to={`${RoutePath.profile}${comment?.user.id}`}>
                    {comment?.user.avatar ? (
                        <Avatar
                            size={30}
                            src={comment?.user.avatar}
                        />
                    ) : null}
                </AppLink>
                <Text
                    className={cls.username}
                    title={comment?.user.username}
                />
            </div>
            <Text
                className={cls.text}
                text={comment?.text}
            />
        </VStack>

    );
});
