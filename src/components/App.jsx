import ProfileList from "./Profile/ProfilesList/ProfileList";
import userData from '../data/user';

import StatisticsSection from "./Statistics/StatisticsSection/StatisticsSection";
import StatisticsList from "./Statistics/StatisticsList/StatisticsList";
import statisticsData from '../data/data';

import FriendList from "./Friends/FriendsList/FriendList";
import friendsData from '../data/friends';

import TransactionHistory from "./Transactions/TransactionTable/TransactionHistory";
import TransactionList from "./Transactions/TransactionsList/TransactionList";
import transactionsData from "../data/transactions";

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
