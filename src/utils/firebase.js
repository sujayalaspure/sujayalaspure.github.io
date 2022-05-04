import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useSearchParams } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const useFirebase = () => {
  let [searchParams] = useSearchParams();

  const fromParam = searchParams.get("from");

  const getCurrentmonth = () => {
    const now = new Date();
    const some = now.toLocaleString("default", { month: "long", year: "numeric" });
    return some.split(" ").join("-").toString();
  };

  const updateVisitor = async () => {
    const visitorRef = ref(db, "portfolio");
    const countRef = child(visitorRef, "visits");
    const count = await get(countRef);
    set(countRef, count.val() + 1);
    const monthRef = child(visitorRef, "monthly/" + getCurrentmonth());
    const month = await get(monthRef);
    set(monthRef, month.val() + 1 || 1);
    if (fromParam) {
      const fromRef = child(visitorRef, "from/" + fromParam);
      const from = await get(fromRef);
      set(fromRef, from.val() + 1 || 1);
    }
  };

  return { updateVisitor };
};

export default useFirebase;
