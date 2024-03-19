import React from "react";
import Stack from 'react-bootstrap/Stack';

export default function SingleDate(){
    return(
        <div style={{ width: '98%', margin: 'auto' }}>
        <Stack direction="horizontal" gap={4}>
          <div className="p-2 ms-auto">PROG-1233</div>
          <div className="vr" />
          <div className="p-2">12/03/2024</div>
        </Stack>
      </div>
    )
}