
type FormWrapperProps = {
    title: string;
    children: React.ReactNode;
}

export const FormWrapper = ({ children, title }: FormWrapperProps) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-center">
                <h2>{title}</h2>
            </div>
            <main className="flex flex-gol gap-y-2">
               {children} 
            </main>
        </div>
    )
}