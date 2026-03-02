import wait from "@/util/wait";

export default async function NotificationsPage() {
    await wait(2000);

    // throw new Error("An error occured");

    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-186.25 flex items-center justify-center">
            NOTIFICATIONS
        </div>
    );
}
