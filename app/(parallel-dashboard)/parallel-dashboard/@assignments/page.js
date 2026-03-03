import getAllAssignments from "@/util/assignment";
import wait from "@/util/wait";
import Link from "next/link";

export default async function AssignmentsPage() {
    const assignment = getAllAssignments()

    await wait(3000);
    return (
        <div className="text-xl p-4 border border-gray-200 rounded h-90 flex flex-col items-center justify-center">
            <h2>Assignments List</h2>
            {
                assignment.map(assignment => (
                    <Link key={assignment.id} href={`/parallel-dashboard/assignment/${assignment.id}`}>
                        {assignment.title}
                    </Link>
                ))
            }
        </div>
    );
}
