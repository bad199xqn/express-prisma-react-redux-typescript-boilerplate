import { FunctionComponent } from "react";
import { Navigate } from "react-router";

type routeWithConditionProps = {
  Component: FunctionComponent;
  condition: boolean;
  redirectTo: string;
};

export function routeWithCondition({
  Component,
  condition,
  redirectTo,
}: routeWithConditionProps) {
  return (props?: any) => {
    
    return condition ? <Component {...props} /> : <Navigate to={redirectTo} replace/>
  };
}
