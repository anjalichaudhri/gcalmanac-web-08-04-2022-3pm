import { useMsal } from "@azure/msal-react";
import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./GaLayout.css";
import { handleLogOut } from "../../helpers/AuthenticationHelpers";
import { roles } from "../../constants/roles";
import routes from "../../constants/routes";
import { IUser } from "../../context/UserContext";

interface IGaLayout {
    children: React.ReactNode;
    userInfoCopy: IUser;
}

interface IMenuItemsType {
    route: any;
    description: string;
}

/**
 *
 * @param props
 * @returns Renders the Header, Main Content & Footer
 */

//TODO: Use context instead of props
const GaLayout = (props: IGaLayout) => {
    const { Header, Content, Footer } = Layout;
    const { instance, accounts } = useMsal();
    const [menuItems, setMenuItems] = useState<IMenuItemsType[]>([
        {
            route: "",
            description: "",
        },
    ]);

    useEffect(() => {
        if (props.userInfoCopy.role != null) {
            if (props.userInfoCopy.role === roles.Admin) {
                menuItems.push(
                    ...menuItems,
                    {
                        route: routes.home,
                        description: "HOME",
                    },
                    {
                        route: routes.admin,
                        description: "ADMIN",
                    },
                    {
                        route: routes.calendar,
                        description: "CALENDAR",
                    }
                );
                setMenuItems(menuItems);
            } // else if (userContextState?.user?.user.role === roles.User) {
            else if (props.userInfoCopy.role === roles.User) {
                menuItems.push(
                    ...menuItems,
                    {
                        route: routes.home,
                        description: "HOME",
                    },
                    {
                        route: routes.calendar,
                        description: "CALENDAR",
                    }
                );

                setMenuItems(menuItems);
            }
        } else {
        }
    }, []);

    //TODO: Move inline styles to css file
    return (
        <Layout className="layout" style={{ height: "100vh" }}>
            <Header
                className="layout__header header"
                style={{
                    position: "fixed",
                    zIndex: 1,
                    width: "100%",
                    backgroundColor: "skyblue",
                    padding: "0",
                    margin: "0",
                    height: "8%",
                }}
            >
                <div className="header__logo logo">
                    G<span>ALMANAC</span>
                </div>

                <>
                    {props.userInfoCopy.role && (
                        <div
                            className="logoutcontainer"
                            style={{ backgroundColor: "skyblue" }}
                        >
                            <Button
                                onClick={() => {
                                    handleLogOut(instance, accounts);
                                }}
                                type="text"
                                className="logout__btn"
                            >
                                Log out
                            </Button>
                        </div>
                    )}
                    <Menu
                        className="menu header__menu"
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        style={{
                            marginRight: "0",
                            lineHeight: "62px",
                            justifyContent: "end",
                            backgroundColor: "skyblue",
                        }}
                    >
                        {menuItems.map((item, index) => {
                            return (
                                <Menu.Item
                                    key={index}
                                    className="menu__link menu__link--active"
                                >
                                    <Link to={item.route} className="links">
                                        {item.description}
                                    </Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </>
            </Header>
            <Content className="layout__content">{props.children}</Content>
            <Footer
                className="layout__footer"
                style={{
                    textAlign: "center",
                    position: "relative",
                    top: "7%",
                    height: "7%",
                    width: "100%",
                }}
            >
                GCAlmanac {new Date().getFullYear()} Created by GTD using Ant
                UED
            </Footer>
        </Layout>
    );
};

export default GaLayout;
