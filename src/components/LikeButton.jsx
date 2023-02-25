import { Button } from 'antd';
import { useState } from 'react';

function LikeButton() {

const colors = ['purple','blue','green','yellow','orange','red']
const [count, setCount] = useState(0)
  const handleClick = (e) => {
    console.log('likes +');
    setCount(count+1)

  };

  return (
    <Button type="primary" onClick={handleClick}  style={{backgroundColor:colors[count%6-1]}}>
      {count} Like
    </Button>
  );
}

export default LikeButton;
