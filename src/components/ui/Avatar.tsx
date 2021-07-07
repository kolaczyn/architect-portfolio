import React from 'react'

type Props = {
  src: string
}

const Avatar: React.FC<Props> = ({src}) => {
    return (
      <img className="rounded-full shadow" src={src}/>
    );
}
export default Avatar