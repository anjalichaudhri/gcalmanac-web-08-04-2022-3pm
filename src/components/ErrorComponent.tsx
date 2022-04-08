import { Empty } from "antd";
import { errorImageUrl } from "../constants/images";
import "../styles/global-styles.less";

/**
 *
 * @returns Error Component
 */

function ErrorComponent() {
    return (
        <div className="center">
            <Empty
                image={errorImageUrl}
                description={<span>Please retry, Some Error Occurred</span>}
            ></Empty>
        </div>
    );
}

export default ErrorComponent;
