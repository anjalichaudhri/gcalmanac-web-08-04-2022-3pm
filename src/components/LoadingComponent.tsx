import { Spin } from "antd";
import "antd/dist/antd.less";
import "../styles/global-styles.less";

/**
 *
 * @returns The Loading Component whenever needed
 */

function LoadingComponent() {
    return (
        <div className="center">
            <Spin size="large" tip="loading"></Spin>
        </div>
    );
}

export default LoadingComponent;
