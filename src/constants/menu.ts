import { CalendarToday, Home } from "@material-ui/icons";

import { IMainMenuItem, IMenuItem } from "../model";

const MAIN_MENU: IMainMenuItem[] = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Calendar", icon: CalendarToday, link: "/calendar" }
];
export default MAIN_MENU;

export const FILTER_MENU: IMenuItem[] = [
  {
    label: "All",
    value: "all"
  },
  {
    label: "Active",
    value: "active"
  },
  {
    label: "Completed",
    value: "completed"
  }
];
