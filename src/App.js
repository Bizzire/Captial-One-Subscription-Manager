import styles from "./app.module.scss"
import { Container } from "@mui/system";
import ResponsiveAppBar from "./Components/AppBar"
import ModalComponent from "./Components/ModalComponent";
import SubscriptionsTable from "./Components/TableComponent";

function App() {
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <ResponsiveAppBar>
      </ResponsiveAppBar>
      <section className={styles.subscriptionInfo}>
      <Container maxWidth="xl" className={styles.manageSubscriptionBtn}>
          <div>
            <ModalComponent>
              </ModalComponent>          
            </div>
        </Container>

        <Container maxWidth="xl" className={styles.subscriptionExpenseContainer}>
          <div>
            <h1>
                My Monthly Expense
            </h1>
            <h2 className={styles.monthlyCost}>
                $42.43
            </h2>
          </div>
        </Container>

        <Container maxWidth="xl" className={styles.totalSubscriptionsContainer}>
          <div>
            <h1>
              Total Subscriptions
            </h1>
            <h2 className={styles.totalSubscriptions}>
              28
            </h2>
          </div>
        </Container>
      </section>

      <section className={styles.enrolledSubscriptionsContainer}>
        <Container maxWidth="xl" className={styles.title}>
            <div>
              <h2>
                My Enrolled Subscriptions
                </h2>
              </div>
          </Container>

          <Container maxWidth="xl" className={styles.title}>
            <SubscriptionsTable>
            </SubscriptionsTable>
          </Container>

        </section>
    </>
  );
}

export default App;
