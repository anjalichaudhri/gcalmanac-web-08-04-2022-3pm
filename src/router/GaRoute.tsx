import { Redirect, Route } from "react-router-dom";
import routes from "../constants/routes";

/**
 *
 * @param props
 * @returns React HOC to render route conditionally
 */
//TODO: get userrole from context & remove from props
function GaRoute(props: any) {
    const {
        path,
        component: Component,
        isProtected,
        userRole,
        allowedRoles,
        statusCode,
        ...rest
    } = props;

    if (statusCode !== 200) {
        return (
            <Redirect to={routes.unauthorized} /> // Redirect to unauthorized screen
        );
    } else {
        if (isProtected && allowedRoles.includes(userRole)) {
            return (
                <Route
                    path={path}
                    render={(props) => <Component {...rest} />}
                />
            );
        } else {
            return <Redirect to={routes.unauthorized} />;
        }
    }
}

export default GaRoute;
