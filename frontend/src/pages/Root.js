import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  const token = useLoaderData();
const submit = useSubmit();

  // const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
     submit(null, {
        action: '/logout',
        method: 'post',
      });
    }, 1000 * 60 * 60); // 1 hour
  }, [token, submit]);



  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
