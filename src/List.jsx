import React from 'react';
import ReactDOM from 'react-dom';
import GroupMembersList from './App'; // Adjust the path accordingly

const App = () => {
  return (
    <div>
      <GroupMembersList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
