import { FunctionComponent } from "react";
import { routeWithCondition } from "./route-with-condition";
import { useAppSelector } from "../redux/store";
import { userSelector } from "../redux/user.slice";

export default function routeLoggedIn({
  Component,
}: {
  Component: FunctionComponent;
}) {
  const user = useAppSelector(userSelector);
  return (
    <>
      {routeWithCondition({
        Component: Component,
        condition: user ? true : false,
        redirectTo: "/login",
      })}
    </>
  );
}
