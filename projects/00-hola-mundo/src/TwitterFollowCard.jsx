import { useState } from 'react';

export function TwitterFollowCard({
  children,
  userName = 'unknow',
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  //   const [text, setText] = useState(
  //     !initialIsFollowing ? 'Seguir' : 'Siguiendo'
  //   );

  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    // {
    //   !isFollowing ? setText('Siguiendo') : setText('Seguir');
    // }
  };

  //   const mouseOver = (e, action) => {
  //     {
  //       isFollowing === true && setText(action);
  //     }
  //   };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          {/* <strong>{name}</strong> */}
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          //   onMouseOver={(e) => {
          //     mouseOver(e, 'Dejar de Seguir');
          //   }}
          //   onMouseOut={(e) => {
          //     mouseOver(e, 'Siguiendo');
          //   }}
          onClick={handleClick}
          className={buttonClassName}
        >
          {/* {text} */}
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
