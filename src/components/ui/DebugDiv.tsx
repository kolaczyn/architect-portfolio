import React from 'react';

type Props = {
  data: string;
};

const DebugDiv: React.FC<Props> = ({ data }) => {
  return <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre>;
};
export default DebugDiv;
