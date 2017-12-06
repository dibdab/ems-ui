import { match } from "react-router";

export interface DashboardProps {
    currentDatabase: string,
    databaseArray: string[],
    onSetCurrentDatabase?: () => void;
}

