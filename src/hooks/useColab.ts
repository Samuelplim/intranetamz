import { useEffect, useState } from "react";

import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

type ColabType = {
  id: string;
  name: string;
  admissionDate: string;
  office?: string;
  workSchedule?: string;
  workingColab: true;
};
type firebaseColab = Record<
  string,
  {
    id: string;
    name: string;
    admissionDate: string;
    office?: string;
    workSchedule?: string;
    workingColab: true;
  }
>;

export function useColab() {
  const dbRef = ref(getDatabase());
  const auth = getAuth();
  const user = auth.onIdTokenChanged;
  const [colabs, setColabs] = useState<ColabType[]>([]);

  useEffect(() => {
    get(child(dbRef, `collaborator/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const databaseColab = snapshot.val();
          const firebaseColabas: firebaseColab = databaseColab ?? {};

          const parsedColab = Object.entries(firebaseColabas).map(
            ([key, value]) => {
              return {
                id: key,
                name: value.name,
                admissionDate: value.admissionDate,
                office: value.office,
                workSchedule: value.workSchedule,
                workingColab: value.workingColab,
              };
            }
          );
          setColabs(parsedColab);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, user]);

  return { colabs };
}
