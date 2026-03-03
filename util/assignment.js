const assignments = [
    {
        id: "ASG-001",
        title: "Database Schema Design",
        subject: "Computer Science",
        points: 100,
        status: "completed",
        dueDate: "2024-05-15T23:59:59Z",
        priority: "high"
    },
    {
        id: "ASG-002",
        title: "React Components Lab",
        subject: "Web Development",
        points: 50,
        status: "in-progress",
        dueDate: "2024-05-20T18:00:00Z",
        priority: "medium"
    },
    {
        id: "ASG-003",
        title: "Business Ethics Essay",
        subject: "Philosophy",
        points: 75,
        status: "pending",
        dueDate: "2024-05-12T12:00:00Z",
        priority: "low"
    },
    {
        id: "ASG-004",
        title: "API Authentication Quiz",
        subject: "Web Development",
        points: 25,
        status: "pending",
        dueDate: "2024-05-18T09:00:00Z",
        priority: "high"
    },
    {
        id: "ASG-005",
        title: "Advanced SQL Queries",
        subject: "Computer Science",
        points: 100,
        status: "in-progress",
        dueDate: "2024-05-25T23:59:59Z",
        priority: "medium"
    }
];


export default function getAllAssignments() {
    return assignments;
}

