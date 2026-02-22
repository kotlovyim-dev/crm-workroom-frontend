import { Workload } from "../ui/workload";

export function DashboardView() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
                <h4 className="text-base text-secondary-foreground">
                    Welcome back, John!
                </h4>
                <h1 className="text-4xl font-bold text-foreground">
                    Dashboard
                </h1>
            </div>
            <div className="flex flex-row gap-6">
                <Workload />
            </div>
        </div>
    );
}
