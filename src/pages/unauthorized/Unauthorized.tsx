import { useMsal } from "@azure/msal-react";
import { Button, Empty } from "antd";
import { unauthorizedImageUrl } from "../../constants/images";
import { handleLogOut } from "../../helpers/AuthenticationHelpers";
import "../../styles/global-styles.less";

/**
 *
 * @returns React Component to display unauthorized page
 */

function Unauthorized() {
    const { instance, accounts } = useMsal();
    return (
        <div className="center">
            <Empty
                image={unauthorizedImageUrl}
                description={<span>Unauthorized User</span>}
            >
                <Button
                    type="primary"
                    onClick={() => {
                        handleLogOut(instance, accounts);
                    }}
                >
                    Login with Another Email Account
                </Button>
            </Empty>
        </div>
    );
}

export default Unauthorized;
