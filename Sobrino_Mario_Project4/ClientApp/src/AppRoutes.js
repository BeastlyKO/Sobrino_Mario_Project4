import { Home } from "./components/Home";
import { Records } from "./components/Records";
import { RecordsButton } from "./components/RecordsButton";
import { RecordsFiltered } from "./components/RecordsFiltered";


const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/records',
        element: <Records />
    },
    {
        path: '/recordsbutton',
        element: <RecordsButton />
    },
    {
        path: '/recordsfiltered',
        element: <RecordsFiltered />
    }


];

export default AppRoutes;
