import { useState } from "react";

export function TwitterFollowCard({formatUserName,  userName, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-folloCard-aside is-following' : 'tw-folloCard-aside';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-folloCard">
      <header className="tw-folloCard-header">
        <img 
          src={`https://unavatar.io/${userName}`} 
          alt="avatar" 
        />
        <div className="tw-folloCard-header-user">
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside className={buttonClassName}>
        <button onClick={handleClick}>{textButton}</button>
      </aside>
    </article>
  );
}
