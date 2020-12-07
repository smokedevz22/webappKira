import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import './App.css';
import Amplify, { Auth } from 'aws-amplify';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <AmplifySignOut />
    
    
    test
    </div>
  );
}

export default withAuthenticator(App);
