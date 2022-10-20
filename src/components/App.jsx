import ProfileList from "./Profile/ProfileList";
import userData from '../data/user';

import StatisticsSection from "./Statistics/StatisticsSection";
import StatisticsList from "./Statistics/StatisticsList";
import statisticsData from '../data/data';

import FriendList from "./Friends/FriendList";
import friendsData from '../data/friends';

import TransactionHistory from "./Transactions/TransactionHistory";
import TransactionList from "./Transactions/TransactionList";
import transactionsData from "../data/transactions"

export default function App() {
  return (
    <>
      <section>
        <ProfileList items={userData} />
      </section>
      <section>
        <StatisticsSection title="Upload stats">
          <StatisticsList stats={statisticsData} />
        </StatisticsSection>
      </section>
      <section>
        <FriendList friends={friendsData} />
      </section>
      <section>
        <TransactionHistory>
          <TransactionList transactions={transactionsData} />
        </TransactionHistory>
      </section>
    </>
  );
};
