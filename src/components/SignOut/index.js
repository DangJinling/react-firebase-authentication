import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
	type="button"
	onClick={auth.doSignOut}
	data-testid="signoutBtn"
  >
	  Sign Out
  </button>

export default SignOutButton;
