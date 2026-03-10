import { clsx } from 'clsx';
import { UserInfo } from '../UserInfo';

interface Props {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const TodoInfo = ({ id, title, completed, userId }: Props) => {
  return (
    <article
      data-id={id}
      className={clsx('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo id={userId} />
    </article>
  );
};
