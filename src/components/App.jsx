import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import statisticsData from '../Data/data.json';
import userData from '../Data/user.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
          <Profile userData={userData} />
          <Statistics title="Upload stats" stats={statisticsData} />
      </div>    
          <FriendList friends={friends} />
      <div>
          <h1>Transaction history</h1>
          <TransactionHistory items={transactions}/>
      </div>
    </div>
  );
};
