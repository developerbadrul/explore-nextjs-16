import getAllAssignments from "@/util/assignment";
import wait from "@/util/wait";

const AssignmentDetailsPage = async ({ params }) => {
    await wait (3000);
    const assignments = getAllAssignments();
    const { id } = await params;

    const singleAssignment = assignments.find(assignments => assignments.id === id)
    // console.log(singleAssignment);



    return (
        <div className="text-xl p-4 border border-gray-200 rounded h-90 flex items-center justify-center">
            {/* Header Section */}
            <div className="bg-gray-50 p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                            {singleAssignment.subject}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-1">{singleAssignment.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">Reference: {singleAssignment.id}</p>
                    </div>

                    {/* Dynamic Priority Badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${singleAssignment.priority === 'high' ? 'bg-red-100 text-red-700' :
                        singleAssignment.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                        }`}>
                        {singleAssignment.priority.toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Details Grid */}
            <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase">Points</h4>
                    <p className="text-lg font-semibold text-gray-800">{singleAssignment.points} pts</p>
                </div>

                <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase">Status</h4>
                    <p className={`text-lg font-semibold capitalize ${singleAssignment.status === 'completed' ? 'text-green-600' : 'text-blue-600'
                        }`}>
                        {singleAssignment.status.replace('-', ' ')}
                    </p>
                </div>

                <div className="col-span-2 border-t pt-4">
                    <h4 className="text-xs font-medium text-gray-400 uppercase">Deadline</h4>
                    <p className="text-gray-700 font-medium">
                        {new Date(singleAssignment.dueDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetailsPage;