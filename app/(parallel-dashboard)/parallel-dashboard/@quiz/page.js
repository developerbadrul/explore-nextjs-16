import wait from "@/util/wait";

export default async function Quiz() {
    await wait(1000);

    return (
        <div className="text-xl p-4 border border-gray-200 rounded h-90 flex items-center justify-center">
            QUIZ
        </div>
    );
}
