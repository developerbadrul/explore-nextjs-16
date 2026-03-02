export default function ParallelDashboardLayout({ children, assignments, quiz, notifications }) {

    const isLoggedIn = true;

    return (
        <>
            {/* {children} */}
            <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
                {assignments}
                {isLoggedIn && notifications}
                {quiz}
            </div>
        </>
    );
}