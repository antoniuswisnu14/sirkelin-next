import React from 'react';
import { useRouter } from 'next/router'

export default function Messages() {
    const router = useRouter();
    var axios = require('axios');

    fetch('https://malakh.space/room/', {
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