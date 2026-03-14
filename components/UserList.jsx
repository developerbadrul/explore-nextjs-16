import { getUsers } from "@/actions/register-user";

const UserList = async () => {
    const users = await getUsers();

    console.log(users);
    

    return (
        <div className="card w-full max-w-2xl mx-auto mt-10 shadow-xl">
            <div className="flex items-center justify-between border-b border-brand-muted/20 pb-4 mb-6">
                <h2 className="feature-title">Registered Users</h2>
                <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {users?.length || 0} Total
                </span>
            </div>

            {users?.length > 0 ? (
                <div className="space-y-3">
                    {users.map((user, index) => (
                        <div
                            key={user._id}
                            className="flex items-center justify-between p-4 rounded-xl bg-brand-dark/50 border border-brand-muted/10 hover:border-brand-accent/40 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-dark">
                                    {index + 1}
                                </div>
                                <div>
                                    <p className="font-semibold text-white group-hover:text-brand-accent transition-colors">
                                        {user.name}
                                    </p>
                                    <p className="feature-name text-xs">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative arrow or action button could go here */}
                            <div className="text-brand-muted group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 rounded-full bg-brand-muted/10 p-4">
                        <svg className="h-8 w-8 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <p className="feature-name">No users found in the database.</p>
                </div>
            )}
        </div>
    );
};

export default UserList;