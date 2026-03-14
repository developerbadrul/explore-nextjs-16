import NewUserForm from "@/components/NewUserForm";
import UserList from "@/components/UserList";

const RegisterPage = () => {
    return (
        /* 'wrapper' handles the center grid and background color from our globals.css */
        <main className="wrapper py-10 px-4">
            
            {/* Inner container to manage the width and vertical spacing */}
            <div className="w-full max-w-4xl space-y-12">
                
                <header className="text-center">
                    <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
                        USER <span className="text-brand-accent">REGISTRATION</span>
                    </h1>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-accent/50" />
                </header>

                <section className="grid gap-8 lg:grid-cols-2 lg:items-start">
                    {/* The Form Side */}
                    <div className="h-full">
                        <NewUserForm />
                    </div>

                    {/* The List Side */}
                    <div className="h-full">
                        <UserList />
                    </div>
                </section>

            </div>
        </main>
    );
};

export default RegisterPage;