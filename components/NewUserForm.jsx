import { addUser } from "@/actions/register-user";

export default function NewUserForm() {
    return (
        <main className="wrapper p-4">
            {/* card is our custom utility from globals.css */}
            <div className="card w-full max-w-md shadow-2xl">
                <div className="mb-8 text-center">
                    <h2 className="feature-title">Create Account</h2>
                    <p className="feature-name mt-2">Enter your details to get started</p>
                </div>

                <form action={addUser} className="space-y-6">
                    <div className="space-y-2">
                        <label className="feature-name block pl-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-brand-muted/20 bg-brand-dark p-3 text-white outline-none ring-brand-accent/30 transition-all focus:ring-2"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="feature-name block pl-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full rounded-xl border border-brand-muted/20 bg-brand-dark p-3 text-white outline-none ring-brand-accent/30 transition-all focus:ring-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-brand-accent py-3 font-bold text-brand-dark transition-transform hover:scale-[1.02] active:scale-95"
                    >
                        Create User
                    </button>
                </form>
            </div>
        </main>
    );
}