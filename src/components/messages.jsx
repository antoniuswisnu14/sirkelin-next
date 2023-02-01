import React from 'react';
import { useRouter } from 'next/router'

export default function Messages() {
    const router = useRouter();

    fetch('https://malakh.space/api/room/', {
        method: 'GET',
        credentials: 'include',
      })
      .then((res) => res.json())
      .then((json) => {
          console.log(json);
      })
      .catch((err) => {
          console.log(err);
      });

    return (
        <div>Ini messages</div>
    )
}