import wait from "@/util/wait";

export default async function AssignmentsPage() {
    await wait(3000);
    return (
        <div className="text-xl p-4 border border-gray-200 rounded h-90 flex items-center justify-center">
            ASSIGNMENTS
        </div>
    );
}
