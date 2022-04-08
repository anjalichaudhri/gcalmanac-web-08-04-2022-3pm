export const employeeHierarchy: {
    id: string;
    parentId: string;
    child: string;
    parent: string;
    icon: string;
}[] = [
    {
        id: "1",
        parentId: "",
        child: "Shobhon Chatterjee",
        parent: "",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "2",
        parentId: "1",
        child: "Saurabh Pati",
        parent: "Shobhon Chatterjee",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "3",
        parentId: "1",
        child: "Logan Le",
        parent: "Shobhon Chatterjee",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "4",
        parentId: "1",
        child: "Abhay Singh",
        parent: "Shobhon Chatterjee",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "5",
        parentId: "2",
        child: "Z",
        parent: "Saurabh Pati",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "6",
        parentId: "2",
        child: "W",
        parent: "Saurabh Pati",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "7",
        parentId: "4",
        child: "Demo",
        parent: "",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "8",
        parentId: "4",
        child: "Test",
        parent: "",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "9",
        parentId: "8",
        child: "AB",
        parent: "",
        icon: "./assets/images/OIP.jpg",
    },
    {
        id: "10",
        parentId: "5",
        child: "f",
        parent: "",
        icon: "./assets/images/OIP.jpg",
    },
];
