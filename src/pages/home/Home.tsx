import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import "./Home.css";

/**
 *
 * @returns React Component to show Home Page
 */

function Home() {
    const userInfo = useSelector((state: any) => state.userInfo);
    const { accounts } = useMsal();

    return (
        <>
            <div className="home">
                <section className="user">
                    <div className="user__avatarcontainer">
                        <div className="user__avatar">
                            <Avatar size={120} icon={<UserOutlined />} />
                        </div>
                    </div>
                    <div className="user__info">
                        <div className="user__infowrapper">
                            <h1>Welcome {accounts[0].name}</h1>
                            <h1>Trainee</h1>
                            <span>Upcoming Leaves : </span>
                        </div>
                    </div>
                </section>
                <section className="update__info">
                    {/* <PerfectScrollbar> */}
                    <div className="updated__infocontainer">
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up</h1>
                        <h1>What Up end</h1>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
