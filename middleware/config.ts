import AuthenticationMiddleware from "./authentication.middleware";
import GatewayMiddleware from "./gateway.middleware";

export const middleware = [AuthenticationMiddleware, GatewayMiddleware];
