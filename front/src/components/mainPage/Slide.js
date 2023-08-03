import React from 'react';
import ReactPlayer from 'react-player';

export default function Slide({ url }) {
  return <ReactPlayer
            url={ url }
            muted
            loop
            playing={true}
            width={1200}
        />;
}