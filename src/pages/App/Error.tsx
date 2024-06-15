import { Link } from "react-router-dom";


function ErrorPage() {
    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center gap-16">
                <h1 className="text-5xl font-bold text-orange-600 text-shadow-lg">Error 404: Page Not Found</h1>
                <Link to="/" className="rounded-md border-2 border-black bg-orange-600 px-14 py-6 shadow-[-5px_4px_1px_rgb(0,0,0)]">
                    <button className="text-2xl font-bold text-gray-200 text-shadow">Voltar à página principal</button>
                </Link>
            </div>
        </>
    );
}

export default ErrorPage;