import usersFromServer from '../../api/users';

interface Props {
  id: number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function getUserById(targetId: number): User | undefined {
  return usersFromServer.find(user => user.id === targetId);
}

export const UserInfo = ({ id }: Props) => {
  const user = getUserById(id);

  return (
    user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
  );
};
