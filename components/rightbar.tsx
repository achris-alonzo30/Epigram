export const Rightbar = () => {
    return (
        <div className="absolute right-0 h-full w-60 -mt-1 top-16 bottom-0 lg:block hidden">
            <div className="flex flex-col pr-2 mt-8 space-y-4">
                {/* Add Feedback button */}

                {/* These two will be separated with a border on their own */}
                <div className="flex flex-col border rounded-lg shadow-lg dark:bg-slate-900 dark:border-slate-700 px-2 py-2">
                    Notification
                </div>
                
                <div className="flex flex-col border rounded-lg shadow-lg dark:bg-slate-900 dark:border-slate-700 px-2 py-2">
                    Recent Activity
                </div>
                {/* Install the React Vertical Timeline Component for the Recent Acitivity */}
            </div>
        </div>
    )
}

