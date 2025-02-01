import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./store/atoms/atom";
import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // but we didnt use useMemo hook to memoize this, but we should to make it optimal but we will use selector, as it will do same job as useMemo
  const totalNotification =
    networkNotificationCount +
    jobsAtomCount +
    notificationAtomCount +
    messagingAtomCount;

  return (
    <>
      <button>Home</button>

      <button>Jobs ({jobsAtomCount})</button>
      <button>
        My network (
        {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
