```javascript
// pages/api/session.js
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(authOptions);
  res.status(200).json(session);
}
```

```javascript
// pages/profile.js
import {useState, useEffect} from 'react';

export default function Profile() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch('/api/session');
      const data = await res.json();
      setSession(data);
    };

    fetchSession();
  }, []);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Logged in as: {session?.user?.email}</p>
    </div>
  );
}
```